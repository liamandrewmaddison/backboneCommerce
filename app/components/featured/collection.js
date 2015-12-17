define([
	'underscore',
	'backbone',
	'featured/model'
], function(_, Backbone, FeaturedModel){
	var FeaturedCollection = Backbone.Collection.extend({
		model: FeaturedModel
	});
	return FeaturedCollection;
});