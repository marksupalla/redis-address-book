'use strict';

var Address = require('../models/address');

exports.index = function(req, res){
  res.render('addresses/index');
};

exports.new = function(req, res){
  res.render('addresses/new');
};

exports.create = function(req, res){
  Address.create(req.body, res.locals.user._id, function(){
    res.redirect('/addresses');
  });
};
