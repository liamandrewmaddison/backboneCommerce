define([
    'jquery',
    'underscore',
    'backbone',
    //views
    'index/view'
], function($, _, Backbone, IndexView){
    'use strict';
    var AppRouter = Backbone.Router.extend({
        routes: {
            ''          : 'homepage',
            '*actions'  : '404'
        }
    });
    var initialize = function(moltin){
        var appRouter = new AppRouter();
        //home route
        appRouter.on('route:homepage', function() {
            new IndexView(moltin);
        });
        //404 route
        appRouter.on('route:404', function(actions){
            //alert(actions);
            console.log(actions);
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});