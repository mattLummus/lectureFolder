'use strict';
var _ = require('lodash');

exports.product = function(req, res){
  var numbers = req.query.numbers.split(', ');
  var prod = _.reduce(numbers, function(acc, num){return acc*num;}, 1);
  res.jsonp({product:prod});
};

exports.names = function(req, res){
  var n = req.query.nm.split(', ');
  var sum;
  var result;

  var temp =_.map(n, function(str){return str.length;});



  if(sum%2===0){
    result = sum*sum;
  }
  else{
    result = sum*sum*sum;
  }
  res.jsonp({result:result});
  console.log(n);
  console.log(temp);
};
