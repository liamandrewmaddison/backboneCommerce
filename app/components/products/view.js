define([
    'jquery',
    'underscore',
    'backbone',
    'text!products/template.html',
    'products/model',
    'products/collection'
], function($, _, Backbone, Template, ProductModel, ProductCollection){
    'use strict';
    var ProductView = Backbone.View.extend({
        el: '[data-view="main"]',
        
        fetchProduct: function(moltin){
            var $this = this;
        },

        initialize: function(moltin){
            this.fetchProduct(moltin);
        },

        render: function (rendered) {
            var template = _.template($(Template).html(), {rendered: rendered.models});
            $(this.el).html(template);
        },
    });
    return ProductView;
});