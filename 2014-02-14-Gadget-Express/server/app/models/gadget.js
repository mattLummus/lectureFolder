'use strict';

function Gadget(gadget){
  this.name = gadget.name || '';
  this.cost = parseInt(gadget.cost || 0);
  this.quantity = parseInt(gadget.quantity || 0);
}

module.exports = Gadget;
