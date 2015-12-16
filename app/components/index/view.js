define([
    'jquery',
    'underscore',
    'backbone',
    'text!index/template.html'
], function($, _, Backbone, Template){
    'use strict';
    var IndexView = Backbone.View.extend({
        template: Template,
        
        el: '[data-view="main"]',

        initialize: function(){
            this.render();
        },

        render: function () {
            $(this.el).html(_.template(this.template));
        },
    });
    return IndexView;
});