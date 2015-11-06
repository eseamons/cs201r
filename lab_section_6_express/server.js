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
  http.createServer(app).listen(80);
  https.createServer(options, app).listen(443);


  app.get('/', function (req, res) {
    res.send("Get Index");
  });
app.use('/', express.static('./html', {maxAge: 60*60*1000}));


app.get('/getcity', function (req, res) {
    console.log("In getcity route");
    var query = req.query['q'];
    var myReg = new RegExp("^"+query);

    fs.readFile('cities.dat.txt',function(err,data) {
            if(err) {throw err;}
            var cities = data.toString().split('\n');
            var jsonresult = [];
            for(i = 0; i < cities.length; i++) {
                var result = cities[i].search(myReg);
                if(result !== -1 && query !== '') {
                    jsonresult.push({city:cities[i]});
                    console.log(jsonresult);
                }
            }
            res.json(jsonresult);
     });
    
});

