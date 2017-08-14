var TileView = Backbone.View.extend({

    tagName: 'div',
    debug: false,

    events: {
        "click": "position"
    },

    initialize: function(options) {
        this.options = options;
    },

    addClickMap: function(popup){
        var clickMap = new ClickMapView({popup:popup});
        this.$el.append(clickMap.$el);
    },

    render: function (){

        if(this.options.popups){
            for(i=0; i<this.options.popups.length; i++)
            this.addClickMap(this.options.popups[i]);
        }

        var formattedNumber = this.options.number < 10 ?  ("0" + this.options.number).slice(-2) : this.options.number;

        this.$el.addClass('tile');
        this.$el.attr('id', "tile-" + this.options.number);

        if(this.options.image_active)
        this.$el.css('background-image', "url('img/slices-onboarding/images/onboarding_" + formattedNumber.toString() + ".jpg')");

        return this;
    },

    position: function($event){

        if(!this.debug) return;

        var x = $event.pageX - $(this.$el).offset().left;
        var y = $event.pageY - $(this.$el).offset().top;

        var output = {};
        output.tile = this.options.number;
        output._x = x;
        output._y = y;

        console.log(JSON.stringify(output));
    }




});
