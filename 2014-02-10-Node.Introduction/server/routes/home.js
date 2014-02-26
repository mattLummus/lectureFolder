'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name:'My name is node'});
};

exports.favcolor = function(req, res){
  res.jsonp({color:'green'});
};

exports.sum = function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum: total});
};

exports.drink = function(req, res){
  var name = req.params.name;
  var age = req.params.age;
  var temp;
  if(age<18){
    temp = 'cannot';
  }
  else if(age>17 && age<21){
    temp = 'maybe can';
  }
  else if(age>20){
    temp = 'can';
  }
  res.jsonp({msg: name+' '+temp+' drink'});
};
