/* jshint unused:false */
'use strict';

var User = require('../models/user');
var mongodb = require('mongodb');
var assert = require('assert');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var users = db.collection('users');

  var user = new User(req.body);
  users.insert(user, function(err,records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = req.app.locals.db;
  var users = db.collection('users');

  users.find().toArray(function(err, users){
    console.log(users);
    res.send({users:users});
  });
};

exports.getUser = function(req, res){
  var db = req.app.locals.db;
  var users = db.collection('users');
  var id = new mongodb.ObjectID(req.params.id);

  users.find({_id:id}).toArray(function(err, item){
    res.send({user:item[0]});
  });
};

exports.deleteUser = function(req, res){
  var db = req.app.locals.db;
  var users = db.collection('users');
  var id = new mongodb.ObjectID(req.params.id);
  users.remove({_id:id}, function(err, users){
    console.log(users);
    var trigger = assert(1, users);
    res.send(trigger);
  });
};

exports.updateUser = function(req, res){
  var db = req.app.locals.db;
  var users = db.collection('users');
  var user = new User(req.body);
  var id = new mongodb.ObjectID(req.params.id);
  users.update({_id:id}, user, function(err, record){
      res.send(record[0]);
    });
};
