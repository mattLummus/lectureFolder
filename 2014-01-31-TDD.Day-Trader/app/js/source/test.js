/* global test:false, start:false, stop:false, deepEqual:false, ok:false, throws: false, Stock:false, start:false, asyncTest:false, Portfolio:false, Client:false */

'use strict';

test('Stock#new', function(){
  var s1 = new Stock('AAPL', 50, 25);

  throws(function(){
    s1.symbol = 'abc';
  }, 'should not be able to set symbol on s1');

  throws(function(){
    s1.purchaseAmount = 30;
  }, 'should not be able to set purchaseAmount on s1');

  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.symbol, 'AAPL', 's1 should be AAPL');
  deepEqual(s1.shares, 50, 's1 should have 50 shares ');
  deepEqual(s1.purchaseAmount, 25, 's1 should have been purchased at 25');
});

asyncTest('Stock#value', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.value(function(val){
    ok(val > 0, 'appl total should be above zero');
    start();
  });
});

test('Portfolio#new', function() {
  var p1 = new Portfolio('Tech Stocks');

  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.name, 'Tech Stocks', 'p1 should have a name');
  deepEqual(p1.stockCount, 0, 'p1 should have no stocks');
});

test('Portfolio#addStock', function() {
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  deepEqual(p1.stockCount, 4, 'p1 should have 4 stocks');
});

test('Portfolio#getStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  var s5 = p1.getStock('AAPL');
  var stocks = p1.getStock(['AMZN', 'GOOG']);

  deepEqual(s5.symbol, 'AAPL', 's5 should be AAPL');
  deepEqual(stocks.length, 2, 'var stocks should have 2 stocks');
  deepEqual(stocks[0].symbol, 'AMZN', 'stocks[0] should be AMZN');
  deepEqual(stocks[1].symbol, 'GOOG', 'stocks[1] should be GOOG');
});

test('Portfolio#delStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  p1.addStock([s1,s2,s3,s4]);

  var s5 = p1.delStock('AAPL');
  var s6 = p1.delStock('FAKE');
  var stocks = p1.delStock(['AMZN', 'GOOG']);

  deepEqual(p1.stockCount, 1, 'p1 should have 1 stocks');
  deepEqual(s5.symbol, 'AAPL', 's5 should be AAPL');
  ok(!s6, 'should not find FAKE');
  deepEqual(stocks.length, 2, 'stocks should have 2 stocks');
  deepEqual(stocks[0].symbol, 'AMZN', 'stock[0] should be AMZN');
  deepEqual(stocks[1].symbol, 'GOOG', 'stock[1] should be GOOG');
});

test('Client#new', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  p1.addStock([s1,s2,s3,s4]);
  var c1 = new Client('Barack Obama');

  ok(c1 instanceof Client, 'p1 should be an instance of Portfolio');
  deepEqual(c1.name, 'Barack Obama', 'c1 should be da Prez');
});

test('Client#addStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  p1.addStock([s1,s2,s3,s4]);
  var c1 = new Client('Barack Obama');
  c1.addPortfolio(p1);

  deepEqual(p1.name, 'Tech Stocks', 'p1 should be Tech Stocks');
  deepEqual(c1.portfolioCount, 1, 'c1 should have 1 portfolio');
});

test('Client#getPortfolio', function(){
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Other Stocks');
  var p3 = new Portfolio('More Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  p1.addStock([s1,s2]);
  p2.addStock(s3);
  p3.addStock(s4);
  var c1 = new Client('Barack Obama');
  c1.addPortfolio([p1,p2]);
  c1.addPortfolio(p3);
  var p5 = c1.getPortfolio('Tech Stocks');
  var ports = c1.getPortfolio(['Other Stocks', 'More Stocks']);

  deepEqual(p5.name, 'Tech Stocks', 'p5 should be Tech Stocks');
  deepEqual(ports.length, 2, 'var ports should have 2 portfolios');
  deepEqual(ports[0].name, 'Other Stocks', 'ports[0] should be Other Stocks');
  deepEqual(ports[1].name, 'More Stocks', 'ports[1] should be More Stocks');
});

test ('Client#delPortfolio', function(){
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Other Stocks');
  var p3 = new Portfolio('More Stocks');
  var p4 = new Portfolio('Bonus Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  p1.addStock(s1);
  p2.addStock(s2);
  p3.addStock(s3);
  p4.addStock(s4);
  var c1 = new Client('Barack Obama');
  c1.addPortfolio([p1,p2,p3,p4]);

  var p5 = c1.delPortfolio('Tech Stocks');
  var p6 = c1.delPortfolio('FAKE');
  var portfolios = c1.delPortfolio(['Other Stocks', 'More Stocks']);

  deepEqual(c1.portfolioCount, 1, 'c1 should have 1 portfolio');
  deepEqual(p5.name, 'Tech Stocks', 'p5 should be Tech Stocks');
  ok(!p6, 'should not find FAKE');
  deepEqual(portfolios.length, 2, 'portfolios should have 2 portfolios');
  deepEqual(portfolios[0].name, 'Other Stocks', 'portfolios[0] should be Other Stocks');
  deepEqual(portfolios[1].name, 'More Stocks', 'portfolios[1] should be More Stocks');
});

asyncTest ('Client#purchaseStock', function(){
  stop();
  var c1 = new Client('Bob', 50000);

  c1.purchaseStock('AMZN', 50, function(stock){
    ok(stock instanceof Stock, 'should be a stock');
    ok(c1.cash < 50000, 'client should have 50,000 or less cash');
    deepEqual(stock.symbol, 'AMZN', 'stock should be AMZN');
    deepEqual(stock.shares, 50, 'stock should have 50 shares of stock');
    start();
  });
  c1.purchaseStock('AMZN', 50000000, function(stock){
    ok(!stock, 'should not be a stock');
    deepEqual(c1.cash, 50000, 'should have 50k');
    start();
  });
});

asyncTest('Client#sellStock', function(){
  var c1 = new Client('Bob Smith', 100000);
  var s1 = new Stock('AAPL', 50, 250);
  c1.sellStock(s1, 10, function(stock){
    ok(stock instanceof Stock, 'should be a stock');
    deepEqual(stock.shares, 40, 'should be 50 shares');
    deepEqual(stock.symbol, 'AAPL', 'should be AAPL');
    ok(c1.cash > 100000, 'should have more than 100k');
    start();
  });
});
