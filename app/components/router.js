define([
    'jquery',
    'underscore',
    'backbone',
    //views
    'index/view',
    'products/view'
], function($, _, Backbone, IndexView, ProductView){
    'use strict';
    var AppRouter = Backbone.Router.extend({
        routes: {
            ''                : 'homepage',
            'products/:slug'  : 'product',
            '*actions'        : '404',
        },
    });
    var initialize = function(moltin){
        var appRouter = new AppRouter();
        //home route
        appRouter.on('route:homepage', function() {
            new IndexView(moltin);
        });
        //product view
        appRouter.on('route:product', function(slug){
            new ProductView(moltin, slug);
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