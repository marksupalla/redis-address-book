'use strict';

function Address(o, id){
  this.name    = o.name;
  this.color   = o.color;
  this.twitter = o.twitter;
  this.userId  = id;
};


Object.defineProperty(Address, 'collection', {
  get: function(){return global.mongodb.collection('addresses');}
});

Address.create = function(o, id, cb){
  var a =
};
