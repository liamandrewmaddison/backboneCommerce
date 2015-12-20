define([
	'underscore',
	'backbone',
	'featured/model'
], function(_, Backbone, BasketModel){
	'use strict';
	var BasketCollection = Backbone.Collection.extend({
		model: BasketModel
	});
	return BasketCollection;
});