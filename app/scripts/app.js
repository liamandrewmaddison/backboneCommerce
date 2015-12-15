define([
    'jquery',
    'underscore',
    'backbone',
    'router',
], function($, _, Backbone, Router){
    'use strict';
    var initialize = function(moltin){
        Router.initialize(moltin);
    };
    return {
        initialize: initialize
    };
});