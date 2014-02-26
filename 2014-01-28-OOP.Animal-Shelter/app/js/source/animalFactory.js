/* global Animal: false */

(function(){

  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;
    var photos;

    photos = [];
    photos[0]= 'url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdGJuvtyipl-Zm2vb8PQPXJeiSdBMkduFckIgLrxkff08Cxedr1g)';
    photos[1]= 'url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdGJuvtyipl-Zm2vb8PQPXJeiSdBMkduFckIgLrxkff08Cxedr1://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRM9xOJittALGv2Emv7ESIlgqIQLVzbUHJWz6CZ2efCaciFIq6w)';
    animal = new Animal('Dog', 'Fido', 3, 'Male', photos, 'Happy Dog', 'Brown');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://1.bp.blogspot.com/-Zk8U1o7z0gQ/T6nz1qpQctI/AAAAAAAAHEk/BCJvBE-r_s8/s1600/Dalmatian-dog6.jpg)';
    animal = new Animal('Dog', 'Spot', 4, 'Male', photos, 'Energetic Dog', 'White');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://upload.wikimedia.org/wikipedia/commons/1/15/Greycat.jpg)';
    photos[1]= 'url(http://us.123rf.com/400wm/400/400/dacosta/dacosta0903/dacosta090300087/4578270-grey-cat-s-muzzle-with-green-eyes-closeup-portrait.jpg)';
    animal = new Animal('Cat', 'Mittens', 2, 'Female', photos, 'Dumb Cat', 'Grey');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://www.rareresource.com/photos/dinosaur-gallery/Velociraptor_6001.jpg)';
    photos[1]= 'url(http://static2.wikia.nocookie.net/__cb20130701185219/jurassicpark/images/e/e3/JP1_VelociraptorCurtain.jpg)';
    animal = new Animal('Lizard', 'Sunshine', 3, 'Male', photos, 'Friendly Raptor', 'Green');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://www.extremescience.com/images/piranha.jpg)';
    photos[1]= 'url(http://www.stormchaser.ca/wildlife/venezuela_wildlife/Piranha_02.JPG)';
    animal = new Animal('Fish', 'Chompy', 1, 'Female', photos, 'Lively Piranha', 'Black/Red');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://upload.wikimedia.org/wikipedia/commons/9/99/Phoneutria_nigriventer.jpg)';
    photos[1]= 'url(http://www.burkemuseum.org/spidermyth/images/phoneut.jpg)';
    animal = new Animal('Spider', 'Fuzzy', 2, 'Female', photos, "Fuzzy's favorite game is hide and seek!",  Piranha', 'Black/Red');
    animals.push(animal);

    return animals;
  };

})();
