var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var url = require('url');
var app = express();
var options = {
    host: '127.0.0.1',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
};
  http.createServer(app).listen(7000);
  console.log("app running on port 7000");
  https.createServer(options, app).listen(443);
  app.get('/', function (req, res) {
    res.send("Get Index");
  });

  app.use('/', express.static('./html', {maxAge: 60*60*1000}));