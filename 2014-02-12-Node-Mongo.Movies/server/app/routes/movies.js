/* jshint unused:false */
'use strict';

var Movie = require('../models/movie');
var mongodb = require('mongodb');
var assert = require('assert');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');

  var movie = new Movie(req.body);
  movies.insert(movie, function(err,records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');

  movies.find().toArray(function(err, movies){
    console.log(movies);
    res.send({movies:movies});
  });
};

exports.getMovie = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = new mongodb.ObjectID(req.params.id);

  movies.find({_id:id}).toArray(function(err, item){
    res.send({movie:item[0]});
  });
};

exports.deleteMovie = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = new mongodb.ObjectID(req.params.id);
  movies.remove({_id:id}, function(err, movies){
    console.log(movies);
    var trigger = assert(1, movies);
    res.send(trigger);
  });
};

exports.updateMovie = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var movie = new Movie(req.body);
  var id = new mongodb.ObjectID(req.params.id);
  movies.update({_id:id}, movie, function(err, record){
      res.send(record[0]);
    });
};
