/* jshint unused:false */
var Animal = (function(){
  'use strict';
  function Animal(name, species, gender, age){
    this.name = name || 'Name Not Defined';
    this.species = species || 'Species Not Defined';
    this.gender = gender || 'Gender Not Defined';
    this.age = age || 'Age Not Defined';
  }
  return Animal;
})();
