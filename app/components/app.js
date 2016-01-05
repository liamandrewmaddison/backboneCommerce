define([
    'jquery',
    'underscore',
    'backbone',
    //router
    'router',
    'semantic'
], function($, _, Backbone, Router){
    'use strict';
    var initialize = function(moltin){
        Router.initialize(moltin);
    };
    return {
        initialize: initialize
    };
});