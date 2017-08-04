var App = Backbone.View.extend({

    el: $('#app'),

    map_active: false,

    app_width: 0,
    app_height: 0,
    hit_x: 0,
    hit_y: 0,
    mouse_x: 0,
    mouse_y: 0,
    origin_x: 0,
    origin_y: 0,
    delta_x: 0,
    delta_y: 0,

    screen_ratio: .25,

    move_active: false,

    events: {
        "click": "activateMap",
        "dragstart": "onDragStart",
        "mousedown": "onMouseStart",
        "touchmove": "onTouchMove",
        "touchstart": "onTouchStart"
    },

    initialize: function() {
        this.collection = new MapCollection();

        $(window).on('mousemove', _.bind(this.onMouseMove, this));
        $(window).on('mousewheel wheel', _.bind(this.onWheel, this));
        $(window).on('mouseup', _.bind(this.onStop, this));
        $(window).on('mouseout',_.bind(this.onStop, this));
        $(window).on('touchend',_.bind(this.onStop, this));
        //$(window).on('resize',_.bind(this.recalculateScreen, this));

        Backbone.on('mapIn',  _.bind(this.activateMap, this));
        Backbone.on('mapOut',  _.bind(this.resetMap, this));

        Backbone.on('focusOn',  _.bind(this.focusOn, this));

        $('#btn-start').on('click',_.bind(this.onInit, this));

        this.screen_ratio = (100/ 7300 * ($(document.body).width() - $('#legend').width())) / 100;
        this.screen_ratio = this.screen_ratio < .1 ? .1 : this.screen_ratio.toFixed(2);
        this.fetchMap();
    },
    onInit: function($event){
        TweenMax.to($('#introduction'), .5, {autoAlpha: 0});

        //Let tile 59 be starting point
        var e = new jQuery.Event("click");
        var offset = $('#tile-76').offset();
        e.clientX = offset.left;
        e.clientY = offset.top;
        $('#tile-76').trigger(e);

        $event.preventDefault();
    },
    recalculateScreen: function(){
        this.screen_ratio = (100/ 7300 * ($(document.body).width() - $('#legend').width())) / 100;
    },
    fetchMap: function() {
        var that = this;
        this.collection.fetch({
            success: function() {
                that.buildMap();
            },
            error: function() {
                alert("Leider ist ein Fehler beim Laden der Karte aufgetreten!")
            }

        });
    },
    buildMap: function(){
        var map = this.collection.toJSON();
        var rows = _.first(map).rows;
        var that = this;

        _.each(rows, function(element){
            var cell_pointers = element.slices.split("-");
            var image_pointers = element.images.split("-");

            that.createRow(
                parseInt(cell_pointers[0]),
                parseInt(cell_pointers[1]),
                parseInt(image_pointers[0]),
                parseInt(image_pointers[1]),
                element);
        });

        TweenMax.set( $(this.el), {css: {scale: this.screen_ratio, backfaceVisibility: 'hidden', perspective: 1000, z: -3, transformOrigin: "0% 0%", force3D:true}});
    },
    createRow: function(start, end, image_start, image_end, model){

        var map = this.collection.toJSON();
        var popups = _.first(map).popups;

        var row = $('<div class="row"></div>');

        for(var i = start; i <= end; i++){

            var filtered_popups = [];

            filtered_popups = _.filter(popups, function(popup){
                return parseInt(popup.tile) == i;
            });

            var image_active = i < image_start || i > image_end ? false : true;

            var tile = new TileView({number: i, image_active: image_active, popups: filtered_popups});
            row.append(tile.$el);
            tile.render();
        }

        $(this.el).append(row[0]);
    },
    activateMap: function($event){

        if(this.map_active) return;

        var screen_width = $(window).width();
        var screen_height = $(window).height();

        var hit_x = $event !== undefined ? $event.clientX : screen_width / 2;
        var hit_y = $event !== undefined ? $event.clientY : screen_height / 2;

        this.origin_x = ((screen_width / 2) - (hit_x / this.screen_ratio)).toFixed(2);
        this.origin_y = ((screen_height / 2) - (hit_y / this.screen_ratio)).toFixed(2);

        this.origin_y *= -1;
        this.origin_x *= -1;

        this.map_active = true;
        $(this.el).addClass('active');
        TweenMax.to( $(this.el), .4,{css:{scale:1, backfaceVisibility: 'hidden', z: 0, x: 0, y: 0}});

    },
    resetMap: function(){
        console.log('resetmap 4');
        this.origin_y = 0;
        this.origin_x = 0;
        this.map_active = false;
        $(this.el).removeClass('active');
        TweenMax.to( $(this.el), .4, {css: {scale: this.screen_ratio, backfaceVisibility: 'hidden', z: 0, x: 0, y: 0}});
    },
    focusOn: function(data){
        var offset = $('#tile-' + data.tile).offset();
        var position = $('#tile-' + data.tile).position();
        var screen_width = $(window).width();
        var screen_height = $(window).height();

        if(!this.map_active)
            this.activateMap({clientX: offset.left + data._x * this.screen_ratio, clientY: offset.top + data._y * this.screen_ratio});
        else{

            this.origin_x = (position.left + data._x - screen_width/2).toFixed(2);
            this.origin_y = (position.top + data._y - screen_height/2).toFixed(2);

            TweenMax.to( $(this.el), .5, {css: {x: -this.origin_x, y: -this.origin_y}});

            Backbone.trigger('content', {popup: data});
        }

    },
    onMouseStart: function($event){

        if(!this.map_active) return;

        this.app_width = $(this.el).width();
        this.app_height = $(this.el).height();

        this.hit_x= $event.clientX;
        this.hit_y = $event.clientY;

        this.move_active = true;

        $event.stopPropagation();
    },
    onTouchStart: function($event){

        if(!this.map_active) return;

        this.app_width = $(this.el).width();
        this.app_height = $(this.el).height();

        var touch = $event.touches[0];

        this.hit_x = touch.clientX;
        this.hit_y = touch.clientY;

        this.move_active = true;

        $event.stopPropagation();
    },
    onWheel: function($event){
        if($event.originalEvent.deltaY < 0) {
            if(!this.map_active)
                this.activateMap();
        }
        else{
            if(this.map_active)
                this.resetMap();
        }
    },
    onMouseMove: function($event){

        if(!this.move_active) return;

        this.mouse_x = $event.clientX;
        this.mouse_y = $event.clientY;

        this.moveMap();

        this.render();
        $event.stopPropagation();
    },
    onTouchMove: function($event){
        if(!this.move_active){
            this.activateMap();
            return;
        }

        var touch = $event.touches[0];

        this.mouse_x = touch.clientX;
        this.mouse_y = touch.clientY;

        this.moveMap();

        this.render();
        $event.stopPropagation();
    },
    moveMap: function(){
        var delta_x, delta_y;

        delta_x = (this.hit_x - this.mouse_x);
        delta_y = (this.hit_y - this.mouse_y);

        var predicted_y = this.origin_y + delta_y;
        var screen_height =  $( window ).height();

        var predicted_x = this.origin_x + delta_x;
        var screen_width =  $( window ).width();

        if(predicted_y > 0 && predicted_y < this.app_height - screen_height)
            this.delta_y = delta_y;

        if(predicted_x > 0 && predicted_x < this.app_width - screen_width)
            this.delta_x = delta_x;
    },
    onStop: function($event){
        this.move_active = false;
        this.origin_x += this.delta_x;
        this.origin_y += this.delta_y;
        this.delta_x = this.delta_y = 0;
    },
    onDragStart: function(){
        return false;
    },
    render: function(){
        //this.el.style.transform = "translate(" + -(this.origin_x + this.delta_x) + "px , " + -(this.origin_y + this.delta_y) + "px)"
        TweenMax.set($(this.el), {'x': -(this.origin_x + this.delta_x) + 'px', 'y': -(this.origin_y + this.delta_y) + 'px'});
    }
});

$(document).ready(function(){
    var app = new App();
});