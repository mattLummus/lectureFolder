/* jshint unused:false */
'use strict';

var Gadget = require('../models/gadget');
var mongodb = require('mongodb');
var assert = require('assert');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var gadgets = db.collection('gadgets');

  var gadget = new Gadget(req.body);
  gadgets.insert(gadget, function(err,records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = req.app.locals.db;
  var gadgets = db.collection('gadgets');

  gadgets.find().toArray(function(err, gadgets){
    console.log(gadgets);
    res.send({gadgets:gadgets});
  });
};

exports.getGadget = function(req, res){
  var db = req.app.locals.db;
  var gadgets = db.collection('gadgets');
  var id = new mongodb.ObjectID(req.params.id);

  gadgets.find({_id:id}).toArray(function(err, item){
    res.send({gadget:item[0]});
  });
};

exports.deleteGadget = function(req, res){
  var db = req.app.locals.db;
  var gadgets = db.collection('gadgets');
  var id = new mongodb.ObjectID(req.params.id);
  gadgets.remove({_id:id}, function(err, gadgets){
    console.log(gadgets);
    var trigger = assert(1, gadgets);
    res.send(trigger);
  });
};

exports.updateGadget = function(req, res){
  var db = req.app.locals.db;
  var gadgets = db.collection('gadgets');
  var gadget = new Gadget(req.body);
  var id = new mongodb.ObjectID(req.params.id);
  gadgets.update({_id:id}, gadget, function(err, record){
      res.send(record[0]);
    });
};
