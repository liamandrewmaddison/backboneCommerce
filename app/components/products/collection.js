define([
	'underscore',
	'backbone',
	'products/model'
], function(_, Backbone, ProductModel){
	'use strict';
	var ProductCollection = Backbone.Collection.extend({
		model: ProductModel
	});
	return ProductCollection;
});