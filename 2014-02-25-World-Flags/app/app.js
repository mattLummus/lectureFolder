'use strict';

/* answers */
var f1 = {country:'usa', code:'us'};
var f2 = {country:'canada', code:'ca'};
var f3 = {country:'russia', code:'ru'};
var f4 = {country:'italy', code:'it'};
var f5 = {country:'france', code:'fr'};
var f6 = {country:'germany', code:'de'};
var f7 = {country:'india', code:'in'};
var f8 = {country:'china', code:'cn'};
var f9 = {country:'japan', code:'jp'};
var f10 = {country:'brazil', code:'br'};
var f11 = {country:'mexico', code:'mx'};
var f12 = {country:'spain', code:'es'};
var f13 = {country:'turkey', code:'tr'};
var f14 = {country:'iran', code:'ir'};
var f15 = {country:'australia', code:'au'};
var f16 = {country:'argentina', code:'ar'};
var f17 = {country:'venezuela', code:'ve'};
var f18 = {country:'sweden', code:'se'};
var f19 = {country:'greece', code:'gr'};
var f20 = {country:'switzerland', code:'ch'};
global.flags =[f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20];

var dbname = process.env.DBNAME;
var port = process.env.PORT || 4000;

var express = require('express');
var app = express();
var less = require('express-less');
var RedisStore = require('connect-redis')(express);
var initMongo = require('./lib/init-mongo');
var initRoutes = require('./lib/init-routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/* --- pipeline begins */
app.use(initMongo.connect);
app.use(initRoutes);
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(express.favicon());
app.use(express.static(__dirname + '/static'));
app.use('/less', less(__dirname + '/less'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
  store : new RedisStore({host: 'localhost', port: 6379}),
  secret: 'change-this-to-a-super-secret-message',
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));
app.use(app.router);
/* --- pipeline ends   */

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

module.exports = app;

