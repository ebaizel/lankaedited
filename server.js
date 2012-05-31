
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.get('/dresses', function(req, res) {
	var dresses = [ 'dress1' , 'dress2'];
	res.render('dresses.jade', { dresses: dresses, title: "lanka dresses" });
});

app.get('/accessories', function(req, res) {
	var accs = [ 'acc1' , 'acc2'];
	res.render('accessories.jade', { accs: accs, title: "lanka accessories" });
});

app.get('/tops', function(req, res) {
	var tops = [ 'top1' , 'top2'];
	res.render('tops.jade', { tops: tops, title: "lanka tops" });
});

app.get('/testing', function(req, res) {
  res.render('testing.jade', { title: "testing" });
});

app.listen(process.env['app_port'] || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\nApp (lankaedited) is running on Node.JS ' + process.version);
// }).listen(process.env['app_port'] || 3000);

