define([
    'jquery',
    'underscore',
    'backbone',
    'text!footer/template.html'
], function($, _, Backbone, Template){
    'use strict';
    var FooterView = Backbone.View.extend({
        template: Template,
        
        el: 'footer',
        
        initialize: function(){
            this.render();
        },

        render: function () {
            $(this.el).html(_.template(this.template));
        },
    });
    return FooterView;
});