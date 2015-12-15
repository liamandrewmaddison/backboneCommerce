define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
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
            moltin.Product.List({category: 'featured'}, function(product) {
                console.log(product);
            });
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});