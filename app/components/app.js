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
        //initializing every necessary component for index
        //renders view 
        new HeaderView();
        new FooterView();
        //router init
        Router.initialize(moltin);
    };
    return {
        initialize: initialize
    };
});