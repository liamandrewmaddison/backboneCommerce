define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
    var AppRouter = Backbone.Router.extend({
        routes: {
            ''          : 'homepage',
            '*actions'  : 'defaultAction'
        }
    });
    var initialize = function(moltin){
        var appRouter = new AppRouter;
        //home route
        appRouter.on('route:homepage', function() {
            alert('yo');
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});