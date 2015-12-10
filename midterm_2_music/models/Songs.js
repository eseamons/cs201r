var mongoose = require('mongoose');
var SongSchema = new mongoose.Schema({
  title: String,
  album: String,
  artist: String,
  genre: String,
  url: String,
  upvotes: {type: Number, default: 0},
});

SongSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Song', SongSchema);