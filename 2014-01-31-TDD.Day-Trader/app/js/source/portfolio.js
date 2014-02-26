/* jshint unused:false */
/* global Stock:false*/

var Portfolio = (function(){

  'use strict';

  function Portfolio(name, stocks){
    this.name = name;
    this._stocks = [];
  }

  Object.defineProperty(Portfolio.prototype, 'stockCount', {
    get: function(){return this._stocks.length;}
  });

  Portfolio.prototype.addStock = function(input){
    this._stocks = this._stocks.concat(input);
  };

  Portfolio.prototype.getStock = function(input){
    var output;
    if (typeof input === 'string'){
      output = findStock(input, this._stocks);
    }
    else{
      output = _.map(input, function(x){
        return findStock(x, this._stocks);
      },this);
    }
    return output;
  };

  Portfolio.prototype.delStock = function(input){
    var stocks = [].concat(input);

    var output = _.remove(this._stocks, function(stock){
      return _.contains(stocks, stock.symbol);
    });

    if(typeof input === 'string'){
      output = output[0];
    }

    return output;
  };

  function findStock(symbol, stocks){
    return _.find(stocks, function(stock){
      return stock.symbol === symbol;
    });
  }

  return Portfolio;
})();
