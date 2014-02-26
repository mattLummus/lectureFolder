'use strict';
var _ = require('lodash');

exports.index = function(req, res){
  var random = _.random(10,10);
  var flagsF = _.sample(global.flags, random);
  var flagsC = _.shuffle(flagsF);
  res.render('home/index', {title: 'Flags of the World', flagsF:flagsF, flagsC:flagsC});
};

exports.match = function(req, res){
  var flags = global.flags;
  var answer;
  var country = req.query.C;
  var flag = req.query.F;
  var temp = _.find(flags, {country:country});
  if(temp.code === flag) {answer=true;}
  else {answer=false;}
  res.send({answer:answer, country:country, flag:flag});
};
