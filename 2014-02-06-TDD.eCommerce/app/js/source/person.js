/* jshint unused:false */
/* global Cart:false, Product:false */
/* exported Person */

var Person = (function(){

  'use strict';

  function Person(name, cash, cart){
    this.name = name;
    this.cash = cash;
    this.cart = new Cart();
  }

  Person.prototype.checkOut = function(){
    var sum = this.cart.total;
    if(sum<this.cash){
      this.cart.products = [];
      this.cash -= sum;
    }
    else{
      return;
      //ALERT(Not enough Cash!)
    }
  };

  return Person;
})();
