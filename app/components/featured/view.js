define([
    'jquery',
    'underscore',
    'backbone',
    'text!featured/template.html',
    'featured/model',
    'featured/collection'
], function($, _, Backbone, Template, FeaturedModel, FeaturedCollection){
    'use strict';
    var FeaturedView = Backbone.View.extend({
        
        el: '.featured',
        
        fetchProducts: function(moltin){
            var $this = this;
            moltin.Product.List({category: 'featured'}, function(product) {
                console.log(product);
                var productCount = product.length,
                    featuredProd = {},
                    productArray = productArray || [];
                
                for(var i = 0; i < productCount; i++){
                    featuredProd[i] = new FeaturedModel({ 
                        title: product[i].title,
                        image: product[i].images[0].url.https,
                        price: product[i].price.data.formatted.without_tax,
                        link : product[i].title.split(' ').join('-').toLowerCase()
                    });
                    productArray.push(featuredProd[i]);
                }
                var featured = new FeaturedCollection( productArray );
                
                $this.render(featured);

                }, function(error) {
                    // Something went wrong...
                    console.log('error ' + error);
                }
            );
        },

        initialize: function(moltin){
            this.fetchProducts(moltin);
        },

        render: function (rendered) {
            var template = _.template($(Template).html(), {rendered: rendered.models});
            $(this.el).html(template);
        },
    });
    return FeaturedView;
});