var Legend = Backbone.View.extend({

    el: $('#legend'),

    initialize: function() {
        $('.btn-in').on('click', this.mapIn);
        $('.btn-out').on('click', this.mapOut);

        this.collection = new MapCollection();
        var that = this;

        this.collection.fetch({
            success: function() {
                that.buildLegend();
            },
            error: function() {
                alert("Leider ist ein Fehler beim Laden der Karte aufgetreten!")
            }

        });
    },
    buildLegend: function(){
        var map = this.collection.toJSON();
        var popups = _.first(map).popups;

        var that = this;

        _.each(popups, function(element){
            var item = new LegendItem({model: element});
            $(that.$el).find('ul').append(item.$el);
        });
    },
    mapIn: function($event){
        Backbone.trigger("mapIn");
    },
    mapOut: function($event){
        Backbone.trigger("mapOut");
    }
});

$(document).ready(function(){
    var legend = new Legend();
});