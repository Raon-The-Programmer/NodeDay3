const mentorRouter = require('express').Router();
const Mentor = require('../models/mentor');
const students = require('../models/students');

mentorRouter.post('/', (req, res) => {
  const mentor = new Mentor(req.body);
  mentor.save()
    .then(() => {
      res.status(201).json({ message: 'Mentor created Successfully!' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' }); // Corrected the status code
    });
});

mentorRouter.get('/api/mentor-students/:mentorId', async (req, res) => {
    try {
      const students = await students.find({ mentor: req.params.mentorId });
      res.json(students);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = {
  mentorRouter,
};
