/* jshint unused:false */

var Business = (function(){

  'use strict';

  function Business(name){
    this.name = name;
    this.products = [];
  }

  Business.prototype.addProduct = function(item){
    this.products.push(item);
  };

  return Business;

})();
