const mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
  index: Number,
  code_name: String,
  real_name: String,
  tier: String,
  tags: String,
  description: String,
  image_url: String,
});
