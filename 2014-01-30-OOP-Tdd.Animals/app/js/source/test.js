/* global test:false, deepEqual:false, ok:false, Shelter:false, Animal:false, Client:false*/
'use strict';

test('Shelter', function() {
  var shelter = new Shelter();
  var s1 = new Shelter();
  var string = 'my string';
  ok(shelter instanceof Shelter, 'shelter should be an instance of Shelter' );
  ok(s1 instanceof Shelter, 's1 should be an instance of Shelter' );
  ok(!(string instanceof Shelter), 'string should not be an instance of Shelter' );
});


test('Shelter#name', function() {
  var s1 = new Shelter('Green Hills Shelter');
  deepEqual(s1.name, 'Green Hills Shelter', 's1 should have a name' );
});


test('Shelter#location', function() {
  var s1 = new Shelter('Green Hills Shelter');
  s1.location = 'Main Street';
  var s2 = new Shelter('GHS');
  deepEqual(s1.location, 'Main Street', 's1 should have a location');
  deepEqual(s2.location, 'Not Defined', 's2 should have a default location');
});


test('Shelter#capacity', function() {
  var s1 = new Shelter('Green Hills Shelter');
  deepEqual(s1.capacity, 0, 's1 should have a capacity of zero');
});


test('Shelter#setHours()', function() {
  var s1 = new Shelter('Green Hills Shelter');
  s1.setHours([
    {day:'Mon', open:'8am', close:'5pm'},
    {day:'Wed', open:'11am', close:'2pm'},
    {day:'Fri', open:'9am', close:'4pm'}
  ]);

  deepEqual(s1.getHours(), 'Mon 8am-5pm, Wed 11am-2pm, Fri 9am-4pm', 's1 should have set hours');
});

test('Shelter#addAnimal()', function() {
  var s1 = new Shelter('Green Hills Shelter');
  var a1 = new Animal('fido');
  s1.addAnimal(a1);

  ok(s1.animalCount() === 1, 's1 should have one item in array');
});

test('Shelter#placeAnimal()', function() {
  var s1 = new Shelter('Green Hills Shelter');
  var a1 = new Animal('fido');
  var a2 = new Animal('rex');
  var a3 = new Animal('spot');
  s1.addAnimal(a1);
  s1.addAnimal(a2);
  s1.addAnimal(a3);
  s1.placeAnimal(a1);
  var a4 = s1.placeAnimal('fido');

  deepEqual(s1.animalCount(), 2, 's1 should contain 2 animals');
  deepEqual(a4.name, 'fido', 'a4 should be Fido');
});

//ANIMAL
test('Animal', function(){
  var a1 = new Animal();

  ok(a1 instanceof Animal, 'a1 should be an instance of Animal');
});

test('Animal#name', function(){
  var a1 = new Animal('fido');

  deepEqual(a1.name, 'fido', 'a1 should be named fido');
});

test('Animal#species', function(){
  var a1 = new Animal('fido', 'dog');

  deepEqual(a1.name, 'fido', 'a1 should be named fido');
  deepEqual(a1.species, 'dog', 'a1 should be a a dog');
});

test('Animal#gender', function(){
  var a1 = new Animal('fido', 'dog', 'male');

  deepEqual(a1.name, 'fido', 'a1 should be named fido');
  deepEqual(a1.species, 'dog', 'a1 should be a a dog');
  deepEqual(a1.gender, 'male', 'a1 should be a male');
});

test('Animal#age', function(){
  var a1 = new Animal('fido', 'dog', 'male', 3);

  deepEqual(a1.name, 'fido', 'a1 should be named fido');
  deepEqual(a1.species, 'dog', 'a1 should be a a dog');
  deepEqual(a1.gender, 'male', 'a1 should be a male');
  deepEqual(a1.age, 3, 'a1 should be 3 years old');
});

test('Animal#undefined', function(){
  var a1 = new Animal();

  deepEqual(a1.name, 'Name Not Defined', 'a1 should be named fido');
  deepEqual(a1.species, 'Species Not Defined', 'a1 should be a a dog');
  deepEqual(a1.gender, 'Gender Not Defined', 'a1 should be a male');
  deepEqual(a1.age, 'Age Not Defined', 'a1 should be 3 years old');
});

//CLIENT
test('Client#adopt()', function(){
  var c1 = new Client('john');
  var a1 = new Animal('fido');
  var s1 = new Shelter('GHS');
  s1.addAnimal(a1);
  c1.adopt(a1, s1);

  deepEqual(c1.animals.length, 1, 'c1 should have 1 animal');
  deepEqual(c1.animals[0].name, 'fido', 'animal should be fido');
});
