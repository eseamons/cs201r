var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Dessert = mongoose.model('Dessert');

router.get('/desserts', function(req, res, next) {
  Dessert.find(function(err, desserts){
    if(err){ return next(err); }
    res.json(desserts);
  });
});

router.post('/desserts', function(req, res, next) {
  var dessert = new Dessert(req.body);
  dessert.save(function(err, dessert){
    if(err){ return next(err); }
    res.json(dessert);
  });
});


module.exports = router;
