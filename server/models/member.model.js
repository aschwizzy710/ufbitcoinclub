var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var memberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: false
  }
});

var Member = mongoose.model('Member', memberSchema);

module.exports = Member;
