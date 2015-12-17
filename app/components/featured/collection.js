define([
	'underscore',
	'backbone',
	'featured/model'
], function(_, Backbone, FeaturedModel){
	'use strict';
	var FeaturedCollection = Backbone.Collection.extend({
		model: FeaturedModel
	});
	return FeaturedCollection;
});