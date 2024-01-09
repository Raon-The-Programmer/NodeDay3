const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  Topic: String,
});

module.exports = mongoose.model('Mentor', mentorSchema, 'mentors');
