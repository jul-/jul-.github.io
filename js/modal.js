var Modal = Backbone.View.extend({

    el: $('#modal'),
    template: _.template("<h3><%= title %></h3><h4 class='mb20'><%= subtitle %></h4> <div class='image text-center'><img src='img/popups/<%= image %>'></div> <p><%= text %></p> <% if (url && url.length > 0) { %><a href='<%= url %>' target='_blank' class='btn'><%= button %></a><% } %>"),

    initialize: function() {
        Backbone.on('content',  _.bind(this.showModal, this));

        $('#modal-container').on('click', this.hideModal);
        $('.modal-close').on('click', this.hideModal);
    },
    render: function(){
        this.$el.find('.modal-content').html( this.template(this.model.popup));
    },
    showModal: function(popup){
        this.model = popup;
        $(document.body).addClass('modal');
        this.render();
    },
    hideModal: function($event){
        if($($event.target).is("#modal-container") || $($event.target).hasClass("modal-close")){
            $(document.body).removeClass('modal');
        }
    }
});

$(document).ready(function(){
    var modal = new Modal();
});