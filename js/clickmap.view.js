var ClickMapView = Backbone.View.extend({

    tagName: 'a',
    className : 'click-map',

    template: _.template("<div class='tooltip'><h4><%= title %></h4><div class='image text-center'><img src='img/popups/<%= image %>'></div></div>"),


    events: {
        "click": "show",
        "touchstart": "show",
        "mouseover": "toForeground",
        "mouseout": "toBackground"
    },

    initialize: function(options){
        this.options = options;
        this.render();
    },

    render: function (){
        /* uncomment for full-version
        this.$el.css({top: this.options.popup._y + 'px', left: this.options.popup._x + 'px'}); */
        this.$el.css({top: (this.options.popup._y / 2) + 'px', left: (this.options.popup._x * .5) + 'px'});

        this.$el.html(this.template(this.options.popup));

        return this;
    },

    show: function(e){
        emospro.content = this.options.popup.title;
        window.emosPropertiesEvent(emospro);
        Backbone.trigger("content", {popup: this.options.popup});
    },

    toForeground: function(){
        this.$el.css({zIndex: 999});
    },

    toBackground: function(){
        this.$el.css({zIndex: 10});
    }



});