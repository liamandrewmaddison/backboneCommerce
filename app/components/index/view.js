define([
    'jquery',
    'underscore',
    'backbone',
    'text!index/template.html',
    //sub views
    'featured/view'
], function($, _, Backbone, Template, FeaturedView){
    'use strict';
    var IndexView = Backbone.View.extend({
        template: Template,
        
        el: '[data-view="main"]',

        initialize: function(moltin){
            this.render(moltin);
        },

        render: function (moltin) {
            $(this.el).html(_.template(this.template));
            new FeaturedView(moltin);
        },
    });
    return IndexView;
});