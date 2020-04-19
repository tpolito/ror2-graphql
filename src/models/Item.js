const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  index: Number,
  code_name: String,
  real_name: String,
  tier: String,
  tags: String,
  description: String,
  image_url: String,
});

module.exports = mongoose.model('Item', ItemSchema);
