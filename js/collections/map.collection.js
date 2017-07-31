var MapCollection = Backbone.Collection.extend({

    url: "data/map.json",

    model: SliceModel,

    parse: function(response) {
        return response.map.onboarding;
    },

    sync: function(method, model, options) {
        var that = this;
        var params = _.extend({
            type: 'GET',
            dataType: 'json',
            url: that.url,
            processData: false
        }, options);

        return $.ajax(params);
    }
});