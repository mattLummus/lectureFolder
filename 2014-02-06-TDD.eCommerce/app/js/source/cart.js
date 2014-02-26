/* jshint unused:false */
/* global Person:false, Product:false, Business:false */

var Cart = (function(){

  'use strict';

  function Cart(){
    this.products = [];
  }

  Cart.prototype.add = function(item, quantity){
    //var temp = _.find(business.products, {'name': name});
    for(var i=0; i<quantity; i++){
      this.products.push(item);
    }
  };

  Cart.prototype.remove = function(name, quantity){
    for(var i=0; i<quantity; i++){
      var index = _.findIndex(this.products, {'name': name});
      this.products.splice(index, index+1);
    }
  };

  Object.defineProperty(Cart.prototype, 'total', {
    get: function(){
      var tempA = _.map(this.products, 'price');
      var sum = _.reduce(tempA, function(temp, num){ return temp + num; });
      return sum;
    }
  });

  return Cart;
})();
