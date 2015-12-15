define([
    'jquery',
    'underscore',
    'backbone',
    //views
    'header/header'
], function($, _, Backbone, HeaderView){
    'use strict';
    var AppRouter = Backbone.Router.extend({
        routes: {
            ''          : 'homepage',
            '*actions'  : 'defaultAction'
        }
    });
    var initialize = function(moltin){
        var appRouter = new AppRouter();
        //home route
        appRouter.on('route:homepage', function() {
            var headerView = new HeaderView();
            headerView.render();
            console.log(moltin);
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});