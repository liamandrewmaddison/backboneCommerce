define([
    'jquery',
    'underscore',
    'backbone',
    'text!products/template.html',
    'products/model',
    'products/collection'
], function($, _, Backbone, Template, ProductModel, ProductCollection){
    'use strict';
    var productData;
    var moltin;
    var ProductView = Backbone.View.extend({
        el: '[data-view="main"]',

        events: {
            'click .add-to-basket' : 'addToBasket',
            'click .thumb'         : 'changeMainImage'
        },

        addToBasket: function(e){
            var sizesQuery      = $('.sizes'),
                quantityQuery   = $('.quantity'),
                selectedSize    = sizesQuery.find('input').val(),
                selectedQty     = quantityQuery.find('input').val(),
                selectedSizeVar = sizesQuery.find('.menu .selected').attr('data-var-key'),
                selectedSizeMod = sizesQuery.find('.menu .selected').attr('data-mod-key');

            $(e.target).addClass('loading');
            moltin.Cart.Insert(productData.id, selectedQty, {'selectedSizeMod': selectedSizeVar}, function(cart) {
                $(e.target).removeClass('loading');
                console.log(cart);
                var basket = new BasketView();
            }, function(error) {
                // Something went wrong...
            });
        },

        changeMainImage: function(e){
            var imageSRC = $(e.target).attr('src');
            $('.main-image img').attr('src', imageSRC);
            $('.thumb').removeClass('active')
            $(e.target).addClass('active');
        },

        fetchProduct: function(slug){
            var $this = this;
            moltin.Product.Find({slug: slug}, function(product) {
                product = product[0];
                productData = {
                    id          : product.id,
                    title       : product.title,
                    description : product.description,
                    price       : product.price.data.formatted.without_tax,
                    mainImgURL  : product.images[0].url.https
                }
                //thumbs loop
                var thumbsArray = [];
                for(var i = 0; i < product.images.length; i++){
                    thumbsArray.push(product.images[i]);
                }
                productData.thumbs = thumbsArray;
                
                //sizes loop - modifiers
                var modifierKey  = [],
                    modifierObj   = product.modifiers;
                for(var k in modifierObj) {
                    modifierKey.push(k);
                }

                //sizes loop - variations
                var variationKeys = [],
                    variationObj = {},
                    sizesArray = [];
                productData.sizes = {};
                
                variationObj = product.modifiers[modifierKey].variations
                
                for(var k in variationObj){
                    variationKeys.push(k);
                }
                
                for(var i = 0; i < variationKeys.length; i++){
                    productData.sizes[i] = product.modifiers[modifierKey].variations[variationKeys[i]]
                }
                //stock level
                var stockArray = [];
                for(var i = 1; i < product.stock_level; i++){
                    if( stockArray.length > 4 ) {
                    
                    }else{
                        stockArray.push(i);
                    }
                }
                productData.stock = stockArray;
                productData.stockLevel = product.stock_level;
                //render
                $this.render(productData);
            });
        },

        initialize: function(Moltin, slug){
            moltin = Moltin;
            this.fetchProduct(slug);
        },

        render: function (rendered) {
            var template = _.template($(Template).html(), rendered);
            $(this.el).html(template);
            $('.ui.dropdown').dropdown();
        },
    });
    return ProductView;
});