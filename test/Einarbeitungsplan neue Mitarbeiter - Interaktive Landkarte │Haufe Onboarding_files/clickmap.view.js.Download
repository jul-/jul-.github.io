var ClickMapView = Backbone.View.extend({

    tagName: 'a',
    className : 'click-map',

    template: _.template("<div class='tooltip'><h4><%= title %></h4><div class='image text-center'><img src='img/popups/<%= image %>'></div></div>"),


    events: {
        "click": "show",
        "mouseover": "toForeground",
        "mouseout": "toBackground"
    },

    initialize: function(options){
        this.options = options;
        this.render();
    },

    render: function (){
        this.$el.css({top: this.options.popup._y + 'px', left: this.options.popup._x + 'px'});

        this.$el.html(this.template(this.options.popup));

        return this;
    },

    show: function(){
        Backbone.trigger("content", {popup: this.options.popup});
    },

    toForeground: function(){
        this.$el.css({zIndex: 999});
    },

    toBackground: function(){
        this.$el.css({zIndex: 10});
    }



});