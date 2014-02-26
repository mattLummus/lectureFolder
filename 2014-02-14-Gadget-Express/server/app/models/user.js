'use strict';

function User(user){
  this.name = user.name || '';
  this.balance = parseInt(user.balance || 0);
  this.products = user.products || [];
}

module.exports = User;
