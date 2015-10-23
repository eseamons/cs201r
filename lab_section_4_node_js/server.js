var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "src";

console.log("Server Running...");

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
  console.log('opening '+ROOT_DIR+urlObj.pathname);
  if(urlObj.pathname == "/getcity") {
        //console.log("IN REST SERVICE");
        res.writeHead(200);
        //var cities = [{city:'Provo'},{city:'Price'},{city:'Alpine'}];
        var myReg = new RegExp("^"+urlObj.query['q']);
        fs.readFile('cities.dat.txt',function(err,data) {
            if(err) {throw err;}
            var cities = data.toString().split('\n');
            var jsonresult = [];
            for(i = 0; i < cities.length; i++) {
                //console.log(cities[i]);
                var result = cities[i].search(myReg);
                if(result !== -1 && urlObj.query['q'] !== '') {
                    jsonresult.push({city:cities[i]});
                }
            }
            res.end(JSON.stringify(jsonresult));    
        });
        
  }
  else {
      fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
  }
  
  
}).listen(8124);