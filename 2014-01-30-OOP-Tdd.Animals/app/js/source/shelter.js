/* jshint unused:false */
var Shelter = (function(){
  'use strict';

  var hours;
  var animals = [];

  function Shelter(n){
    this.name = n;
    this.location = 'Not Defined';
    this.capacity = 0;
  }

  Shelter.prototype.setHours = function(times){
      var tmpHours = _.map(times, function(time){
        return time.day+' '+time.open+'-'+time.close;
      });
      hours = tmpHours.join(', ');
    };

  Shelter.prototype.getHours = function(){
      return hours;
    };

  Shelter.prototype.addAnimal = function(animal){
      animals.push(animal);
    };

  Shelter.prototype.placeAnimal = function(name){
      var tmpAnimals = _.remove(animals, function(animal){
        return animal.name === name;
      });
      return tmpAnimals[0];
    };

  Shelter.prototype.animalCount = function(){
    return animals.length;
  };

  return Shelter;
})();

//CHYLD'S CODE
//Shelter.prototype.placeAnimal = function(name){
//  var animals = _.remove(this.animals function(animal){
//    return animal.name === name;
//  });
//  return animals[0];
//};



/*
   //MY CODE
    this.setHours = function(times){
      var hrs = '';
      for(var i=0; i<times.length; i++){
        var h = times[i];
        var str = h.day+' '+h.open+'-'+h.close;
        if(i+1 !== times.length){
          str = str + ', ';
        }
        hrs = hrs + str;
      }
      this.hours = hrs;
      };
*/
