define([
    'jquery',
    'underscore',
    'backbone',
    'text!header/template.html'
], function($, _, Backbone, Template){
    'use strict';
    var HeaderView = Backbone.View.extend({
        template: Template,
        
        el: 'header',

        initialize: function(){
            this.render();
        },

        render: function () {
            $(this.el).html(_.template(this.template));
        },
    });
    return HeaderView;
});