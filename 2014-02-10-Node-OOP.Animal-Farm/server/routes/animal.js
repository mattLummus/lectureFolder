'use strict';
var Dog = require('../lib/dog');
var Cat = require('../lib/cat');

exports.create = function(req, res){
  console.log(req.query);
  var animal;
  if(req.query.species === 'Dog'){
    animal = new Dog(req.query.name, req.query.gender, req.query.age);
  }
  else if(req.query.species === 'Cat'){
    animal = new Cat(req.query.name, req.query.gender, req.query.age);
  }

  res.jsonp({animal:animal});
};
