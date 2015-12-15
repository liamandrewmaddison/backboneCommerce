define([
    'jquery',
    'underscore',
    'backbone',
    'text!header/template.html'
], function($, _, Backbone, tpl){
    'use strict';
    var HeaderView = Backbone.View.extend({
        template: tpl,
        
        el: 'header',

        render: function () {
            $(this.el).html(_.template(this.template));
        },
    });
    return HeaderView;
});