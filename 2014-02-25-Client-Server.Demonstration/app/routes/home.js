'use strict';

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Template'});
};

exports.calc = function(req, res){
  res.render('home/calc', {title: 'Calculator'});
};

exports.add = function(req, res){
  var x = req.query.x *1;
  var y = req.query.y *1;
  var sum = x + y;
  res.send({sum:sum});
};

exports.mult = function(req, res){
  var a = req.query.x.split(',');
  var product = 1;
  for(var i=0; i<a.length; i++){
    product = product*a[i];
  }
  res.send({product:product});
};

//CHYLD'S CODE
/*
exports.product = function(req, res){
  var numbers = req.query.numbers.split(',');
  var product = ._reduce(numbers, function(acc, x){return acc * x;}, 1);
  res.send({product:product});
};
*/
