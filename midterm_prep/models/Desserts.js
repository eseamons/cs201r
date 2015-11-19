var mongoose = require('mongoose');
var DessertSchema = new mongoose.Schema({
  contestant: String,
  name: String,
  upvotes: {type: Number, default: 0},
});
mongoose.model('Dessert', DessertSchema);