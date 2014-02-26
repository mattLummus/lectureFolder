/* global Animal: false */
/* global animalFactory: false */

(function(){

  'use strict';

  $(document).ready(initialize);

  var animals = [];

  function initialize(){
    $('input, textarea').focusin(focusInput);
    $('input, textarea').blur(blurInput);
    $('#addPhoto').click(addPhoto);
    $('#addAnimal').click(addAnimal);
    $('tbody a').click(search);
    animals = animalFactory();
    makeDatabase();
  }

  function search(){
    //y=_.filter(animals, function(x){
     // var temp = ((this).attr('data-search', 'species'))
  }

  function makeDatabase(){
    $('tbody').empty();
    for(var i=0; i<animals.length; i++){
      var row = $('<tr>');
      var species = $('<td>');
      var aSpecies = $('<a>');
      var name = $('<td>');
      var gender = $('<td>');
      var aGender = $('<a>');
      var age = $('<td>');
      var aAge = $('<a>');
      var color = $('<td>');
      var aColor = $('<a>');
      var description = $('<td>');
      var p1 = $('<td>');
      aSpecies.text(animals[i].species);
      aSpecies.attr('data-value', animals[i].species);
      aSpecies.attr('data-search', 'species');
      name.text(animals[i].name);
      aGender.text(animals[i].gender);
      aGender.attr('data-value', animals[i].gender);
      aGender.attr('data-search', 'gender');
      aAge.text(animals[i].age);
      aAge.attr('data-value', animals[i].age);
      aAge.attr('data-search', 'age');
      aColor.text(animals[i].color);
      aColor.attr('data-value', animals[i].color);
      aColor.attr('data-search', 'color');
      description.text(animals[i].description);
      p1.css('background-image', animals[i].photos[0]);
      p1.css('background-size', 'cover');
      $('tbody a').attr('href', '#');

      $(species).append(aSpecies);
      $(row).append(species);
      $(gender).append(aGender);
      $(row).append(gender);
      $(age).append(aAge);
      $(row).append(age);
      $(color).append(aColor);
      $(row).append(color);
      $(row).append(description);
      $(row).append(name);
      $(row).append(p1);
      $('tbody').append(row);
    }
  }

  function addAnimal(event){
    var species = $('#species').val();
    var name = $('#name').val();
    var age = $('#age').val();
    age = age*1;
    var gender = $('#gender').val();
    var color = $('#color').val();
    var description = $('#description').val();
    var photos = getAnimalPhotos();

    var animal = new Animal(species, name, age, gender, photos, description, color);
    animals.push(animal);
    makeDatabase();
    clear();
    event.preventDefault();
  }

  function getAnimalPhotos(){
    var $divs = $('#container div');
    var map =  _.map($divs, function(div){
      var url = $(div).css('background-image');
      return url;
    });
    debugger;
    return map;
  }

  function addPhoto(){
    var url = $('#photo').val();
    url = 'url(' +url+ ')';
    var $a = $('<a>');
    var $div = $('<div>');
    $a.addClass('th');
    $div.css('background-image', url);
    $div.css('background-size', 'cover');
    $div.addClass('photoBox');
    $a.append($div);
    $('#container').append($a);
    $('#photo').val(' ');
    event.preventDefault();
  }

  function clear(){
    $('#species').val('');
    $('#name').val('');
    $('#age').val('');
    $('#gender').val('');
    $('#color').val('');
    $('#description').val('');
    $('#textID').val('');
    $('#container').empty();
  }

  function focusInput(){
    $(this).css('background-color', '#FFFFCC');
  }

  function blurInput(){
    $(this).css('background-color', 'white');
  }

})();
