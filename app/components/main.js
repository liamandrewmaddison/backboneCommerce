require.config({
    paths: {
        jquery		: '../bower_components/jquery/dist/jquery',
        backbone	: '../bower_components/backbone/backbone',
        underscore	: '../bower_components/lodash/dist/lodash',
        moltin		: '../bower_components/moltin/dist/moltin',
        text		: '../bower_components/requirejs-text/text'
    }
});
require([
	'moltin',
	'app',
    //main views
    'header/view',
    'footer/view',
    'index/view'
], function(moltin, App, HeaderView, FooterView, IndexView){
    'use strict';
    //initializing every main view
    //renders view 
    new HeaderView();
    new IndexView();
    new FooterView();
	//authenticating moltin
    moltin = new Moltin({ publicId: 'eXT0y3fLzXSoqSDW44AsA1y12CZKFEqELXWKN5IK' });
    moltin.Authenticate(function () {
    	//running app
    	App.initialize(moltin);
    });
});