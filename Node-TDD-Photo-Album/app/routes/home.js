'use strict';

exports.index = function(req, res){
  res.render('home/index', {title: 'Photo Album'});
};

exports.redirect = function(req,res){
  res.redirect('/albums/new');
};

