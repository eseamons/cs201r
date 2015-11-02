/**
 * This array of pokemon will represent a piece of data in our 'database'
 */
var students = [
  {
    name: 'Tommy',
    gender: 'M',
    gpa: 3.67,
    major: 'Business',
    class_standing: 'freshman',
    age: 18,
  },
  {
    name: 'Sally',
    gender: 'F',
    gpa: 3.79,
    major: 'Computer Science',
    class_standing: 'junior',
    age: 23,

  },
  {
    name: 'Matt',
    gender: 'M',
    gpa: 3.31,
    major: 'Statistics',
    class_standing: 'senior',
    age: 25,
  },
  {
    name: 'Peter',
    gender: 'M',
    gpa: 3.97,
    major: 'Asian Studies',
    class_standing: 'sophomore',
    age: 22,
  },
  {
    name: 'Claire',
    gender: 'F',
    gpa: 3.84,
    major: 'Marriage and Family Sciences',
    class_standing: 'sophomore',
    age: 21,
  },
  {
    name: 'Adam',
    gender: 'M',
    gpa: 4.0,
    major: 'Computer Science',
    class_standing: 'junior',
    age: 23,
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
        jsonresult.push({name:student.name, gender:student.gender, major:student.major, class_standing: student.class_standing,gpa:student.gpa, age: student.age});
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

