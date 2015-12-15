define([
    'jquery',
    'underscore',
    'backbone',
    //router
    'router',
    //views
    'header/view',
    'footer/view'
], function($, _, Backbone, Router, HeaderView, FooterView){
    'use strict';
    var initialize = function(moltin){
        Router.initialize(moltin);
        //renders view 
        new HeaderView();
        new FooterView();
    };
    return {
        initialize: initialize
    };
});