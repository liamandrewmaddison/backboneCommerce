define([
    'jquery',
    'underscore',
    'backbone',
    'router',
], function($, _, Backbone, Router){
    var initialize = function(moltin){
        Router.initialize(moltin);
    };
    return {
        initialize: initialize
    };
});