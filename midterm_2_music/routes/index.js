var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Song = mongoose.model('Song');

router.get('/songs', function(req, res, next) {
  Song.find(function(err, songs){
    if(err){ return next(err); }
    res.json(songs);
  });
});

router.post('/songs', function(req, res, next) {
  var song = new Song(req.body);
  song.save(function(err, song){
    if(err){ return next(err); }
    res.json(song);
  });
});

router.param('song', function(req, res, next, id) {
  var query = Song.findById(id);
  query.exec(function (err, song){
    if (err) { return next(err); }
    if (!song) { return next(new Error("can't find song")); }
    req.song = song;
    return next();
  });
});

router.get('/songs/:song', function(req, res) {
  res.json(req.song);
});

router.put('/songs/:song/upvote', function(req, res, next) {
  req.song.upvote(function(err, song){
    if (err) { return next(err); }
    res.json(song);
  });
});

module.exports = router;
