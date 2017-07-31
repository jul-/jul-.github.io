var LegendItem = Backbone.View.extend({

    tagName: 'li',

    template: _.template("<a><span class='legend-image'><img src='img/popups/<%= image %>'></span> <span class='legend-title hidden-xs'><%= title %></span></a>"),

    initialize: function() {
        this.render();
    },
    callItem: function(){
        Backbone.trigger("focusOn", this.model);
    },
    render: function(){
        this.$el.html( this.template(this.model));
        $(this.$el).find('a').on('click', _.bind(this.callItem, this));
    }
});