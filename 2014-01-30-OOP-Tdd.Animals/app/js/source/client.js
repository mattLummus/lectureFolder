/* jshint unused:false */
var Client = (function(){
  'use strict';
  function Client(name, animals){
    this.name = name || 'Name Not Defined';
    this.animals = [];
  }

  Client.prototype.adopt = function(animal, shelter){
    shelter.placeAnimal(animal);
    this.animals.push(animal);
  };

  return Client;
})();
