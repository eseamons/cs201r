var http = require('http');
var url = require('url');
var fs = require('fs');
var ROOT_DIR = "src/";
var port = 3500;

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);

  if (urlObj.pathname === '/report') {

	var MongoClient = require('mongodb').MongoClient;
	      MongoClient.connect("mongodb://localhost/academic", function(err, db) {
	        if(err) throw err;
	        db.collection("students", function(err, comments){
	          if(err) throw err;
	          comments.find(function(err, items){
       	     items.toArray(function(err, itemArr){
       	       console.log("Document Array: ");
       	       console.log(itemArr);
       	       res.writeHead(200);
       	       res.end(JSON.stringify(itemArr));
       	     });
       	   });
       	  });
     	 });












  }
  else if(urlObj.pathname === '/report-add') {


      var jsonData = "";
      req.on('data', function (chunk) {
        jsonData += chunk;
      });
      req.on('end', function () {
        var reqObj = JSON.parse(jsonData);
        console.log(reqObj);
        // Now put it into the database
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect("mongodb://localhost/academic", function(err, db) {
          if(err) throw err;
	  var insertObj = [{name:reqObj.studName,age:reqObj.studAge,gpa:reqObj.studGpa,gender:reqObj.studGender,major:reqObj.studMajor,class_standing:reqObj.studClassStanding}]
          db.collection('students').insert(insertObj,function(err, records) {
            console.log("Record added as "+records[0]._id);
	    res.writeHead(200);
            res.end("");
          });
        });
      });   




  }
  else if(urlObj.pathname === '/report-delete'){
       var jsonData = "";

       req.on('data', function (chunk) {
          jsonData += chunk;
       });
       req.on('end', function () {
        var reqObj = JSON.parse(jsonData);
        console.log(reqObj._id);
        console.log("delete student");

// Now delete from database	
        var MongoClient = require('mongodb').MongoClient;
        var ObjectId = require('mongodb').ObjectID;
        MongoClient.connect("mongodb://localhost/academic", function(err, db) {
          if(err) throw err;
          db.collection('students').remove({"_id":ObjectId(reqObj._id)},function(err, records) {
            console.log("Deleted student");
	    res.writeHead(200);
            res.end("");
          });
        });






       }); //end of req on end
       



  }
  else if(urlObj.pathname === '/report-update') {
               var jsonData = "";

       req.on('data', function (chunk) {
          jsonData += chunk;
       });
       req.on('end', function () {
        var reqObj = JSON.parse(jsonData);
        console.log(reqObj);
        console.log("update student");
     



      // Now update the database
	var insertObj = {name:reqObj.studName,age:reqObj.studAge,gpa:reqObj.studGpa,gender:reqObj.studGender,major:reqObj.studMajor,class_standing:reqObj.studClassStanding};
        var MongoClient = require('mongodb').MongoClient;
        var ObjectId = require('mongodb').ObjectID;
        MongoClient.connect("mongodb://localhost/academic", function(err, db) {
          if(err) throw err;
          console.log(insertObj);
	  console.log(reqObj._id);
          db.collection('students').update({"_id" : ObjectId(reqObj._id)},{ $set:{"name":insertObj.name,"age":insertObj.age,"gpa":insertObj.gpa,"gender":insertObj.gender,"major":insertObj.major,"class_standing":insertObj.class_standing}}, {upsert: true},function(err, results) {
	    res.writeHead(200);
            res.end("");
          });



        });

       });


  }
  else {

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

