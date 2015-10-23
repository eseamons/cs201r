/**
 * This array of pokemon will represent a piece of data in our 'database'
 */
var recipe = [
  {
    name: 'Filet Mignon',
    ImageUrl: 'http://sarasnow.com/wp-content/uploads/2010/05/omaha-filet-mignon.jpg',
    directions: [
        {"instruction": "Get  a grill", "order": "1."},
        {"instruction": "Throw the meat on the grill", "order": "2."},
        {"instruction": "Let it cook to perfection", "order": "3."}
    ],
    ingredients: [
    {"item":"Steak", "quantity":"32 oz."}, 
    {"item":"Spices", "quantity":"Mince"}, 
    {"item":"Marinade", "quantity":"1 cup"}
    ]
  },
  {
    name: 'Fettucini Alfredo',
    ImageUrl: 'http://images.media-allrecipes.com/userphotos/250x250/280490.jpg',
    directions: [
        {"instruction": "Get  a grill", "order": "1."},
        {"instruction": "Throw the meat on the grill", "order": "2."},
        {"instruction": "Let it cook to perfection", "order": "3."}
    ],
    ingredients: [
    {"item":"Pasta", "quantity":"1-112oz box oz."}, 
    {"item":"Half and Half", "quantity":"2 Cups"}, 
    {"item":"Cheeses", "quantity":"8 oz."}
    ]

  },
  {
    name: 'Mac-n-Cheese Cassarole',
    ImageUrl: 'http://www.newsnish.com/wp-content/uploads/2015/06/macaroni-cheese-with-leeks-and-bacon.jpg',
    directions: [
        {"instruction": "Get  a grill", "order": "1."},
        {"instruction": "Throw the meat on the grill", "order": "2."},
        {"instruction": "Let it cook to perfection", "order": "3."}
    ],
    ingredients: [
    {"item":"Pasta", "quantity":"1-112oz box oz."}, 
    {"item":"Half and Half", "quantity":"2 Cups"}, 
    {"item":"Cheeses", "quantity":"8 oz."}
    ]
  },
  {
    name: 'Filet Mignon',
    ImageUrl: 'http://sarasnow.com/wp-content/uploads/2010/05/omaha-filet-mignon.jpg',
    directions: [
        {"instruction": "Get  a grill", "order": "1."},
        {"instruction": "Throw the meat on the grill", "order": "2."},
        {"instruction": "Let it cook to perfection", "order": "3."}
    ],
    ingredients: [
    {"item":"Pasta", "quantity":"1-112oz box oz."}, 
    {"item":"Half and Half", "quantity":"2 Cups"}, 
    {"item":"Cheeses", "quantity":"8 oz."}
    ]
  },
  {
    name: 'Fettucini Alfredo',
    ImageUrl: 'http://images.media-allrecipes.com/userphotos/250x250/280490.jpg',
    directions: [
        {"instruction": "Get  a grill", "order": "1."},
        {"instruction": "Throw the meat on the grill", "order": "2."},
        {"instruction": "Let it cook to perfection", "order": "3."}
    ],
    ingredients: [
    {"item":"Pasta", "quantity":"1-112oz box oz."}, 
    {"item":"Half and Half", "quantity":"2 Cups"}, 
    {"item":"Cheeses", "quantity":"8 oz."}
    ]

  },
  {
    name: 'Mac-n-Cheese Cassarole',
    ImageUrl: 'http://www.newsnish.com/wp-content/uploads/2015/06/macaroni-cheese-with-leeks-and-bacon.jpg',
    directions: [
        {"instruction": "Get  a grill", "order": "1."},
        {"instruction": "Throw the meat on the grill", "order": "2."},
        {"instruction": "Let it cook to perfection", "order": "3."}
    ],
    ingredients:[
    {"item":"Pasta", "quantity":"1-112oz box oz."}, 
    {"item":"Half and Half", "quantity":"2 Cups"}, 
    {"item":"Cheeses", "quantity":"8 oz."}
    ]
  },
];

var http = require('http');
var url = require('url');
var fs = require('fs');
var ROOT_DIR = "src/";
var port = 4000;

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);

  if (urlObj.pathname === '/pokemon') {

    res.writeHead(200);
    res.end(JSON.stringify(recipe));

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

