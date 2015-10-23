/**
 * This array of pokemon will represent a piece of data in our 'database'
 */
var students = [
  {
    name: 'Tommy',
    gpa: 3.67,
    class_standing: 'freshman',
  },
  {
    name: 'Sally',
    gpa: 3.79,
    class_standing: 'junior',

  },
  {
    name: 'Matt',
    gpa: 3.31,
    class_standing: 'senior',
  },
  {
    name: 'Peter',
    gpa: 3.97,
    class_standing: 'sophomore',
  },
  {
    name: 'Claire',
    gpa: 3.84,
    class_standing: 'sophmore',
  },
  {
    name: 'Adam',
    gpa: 4.0,
    class_standing: 'junior',
  }
];

var http = require('http');
var url = require('url');
var fs = require('fs');
var ROOT_DIR = "src/";
var port = 4000;

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);

  if (urlObj.pathname === '/report') {
      
     var jsonresult = [];
     /**
     * TODO: return the array of pokemon above as a string
     * with an header status of 'ok'
     */
    students.forEach(function(student) {
        //console.log(poke.name);
        jsonresult.push({name:student.name, class_standing: student.class_standing,gpa:student.gpa});
    });
      
      
    res.writeHead(200);
     
    res.end(JSON.stringify(jsonresult));

  } else {

    /**
     * Here is where we return all requests for files in our 'src' directory
     */
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }

}).listen(port);

console.log('app is now running on port: ' + port)

