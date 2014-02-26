/* global test:false, ok:false, deepEqual:false, Product:false, Cart:false, Person:false*/

'use strict';

test('Product#new', function(){
  var p1 = new Product('iPhone', 100);

  deepEqual(p1.name, 'iPhone', 'p1 should be an iPhone');
  deepEqual(p1.price, 100, 'p1 should cost $100');
});

test('Cart#new', function(){
  var c1 = new Cart();

  ok(c1 instanceof Cart, 'c1 should be a cart object');
});

test('Person#new', function(){
  var r1 = new Person('Matt', 1000);

  deepEqual(r1.name, 'Matt', 'r1 should be Matt');
  deepEqual(r1.cash, 1000, 'r1 should have $1000');
  ok(r1.cart instanceof Cart, 'r1 should have a cart object');
});

/*
test('Business#new', function(){
  var b1 = new Business('Amazon');
  var p1 = new Product('iPhone', 100);
  var p2 = new Product('Car', 10000);
  b1.addProduct(p1);
  b1.addProduct(p2);

  deepEqual(b1.name, 'Amazon', 'b1 should be Amazon');
  deepEqual(b1.products[0], p1, 'b1[0] should be p1');
  deepEqual(b1.products[1], p2, 'b1[1] should be p2');
});
*/

test('Cart#add', function(){
  var r1 = new Person('Matt', 1000);
  var p1 = new Product('iPhone', 100);
  r1.cart.add(p1, 3);

  deepEqual(r1.cart.products.length, 3, 'products should have 3 items');
  deepEqual(r1.cart.products[0], p1, 'products[0] should be p1');
  deepEqual(r1.cart.products[1], p1, 'products[1] should be p1');
  deepEqual(r1.cart.products[2], p1, 'products[2] should be p1');
});

test('Cart#remove', function(){
  var r1 = new Person('Matt', 1000);
  var p1 = new Product('iPhone', 100);
  r1.cart.add(p1, 3);
  r1.cart.remove('iPhone', 2);

  deepEqual(r1.cart.products.length, 1, 'products should have 1 items');
});

test('Cart#total', function(){
  var r1 = new Person('Matt', 1000);
  var p1 = new Product('iPhone', 100);
  r1.cart.add(p1, 3);

  deepEqual(r1.cart.total, 300, 'r1.cart should total $300');
});

test('Person#checkOut+', function(){
  var r1 = new Person('Matt', 1000);
  var p1 = new Product('iPhone', 100);
  r1.cart.add(p1,3);
  r1.checkOut();

  deepEqual(r1.cart.products.length, 0, 'r1.cart should be empty');
  deepEqual(r1.cash, 700, 'r1 should have $700');
});

test('Person#checkOut-', function(){
  var r1 = new Person('Matt', 1000);
  var p1 = new Product('iPhone', 100);
  var p2 = new Product('Car', 10000);
  r1.cart.add(p1,3);
  r1.cart.add(p2,1);
  r1.checkOut();

  deepEqual(r1.cart.products.length, 4, 'r1.cart should still contain its items');
  deepEqual(r1.cash, 1000, 'r1 should still have all its cash');
});
