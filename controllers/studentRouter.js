const studentRouter = require('express').Router()
const mentor = require('../models/mentor')
const Student = require('../models/students')

studentRouter.post('/',(req,res)=>{
    
        const student = new Student(req.body)
        student.save()
        .then(()=>{
            res.status(201).json({message:'Student created Successfully!'})
        }).catch((err)=>{
            console.error(err)
            res.json(500).json({error:'Internal Server Error'})
        })
    
})

studentRouter.post('/api/assign-mentor/:mentorId/:studentId', async (req, res) => {
    try {
      const mentor = await mentor.findById(req.params.mentorId);
      const student = await Student.findByIdAndUpdate(
        req.params.studentId,
        { mentor: mentor._id },
        { new: true }
      );
  
      res.json(student);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  studentRouter.put('/api/assign-mentor/:studentId/:mentorId', async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const student = await Student.findByIdAndUpdate(
        req.params.studentId,
        { mentor: mentor._id },
        { new: true }
      );
  
      res.json(student);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  studentRouter.get('/api/student-mentor/:studentId', async (req, res) => {
    try {
      const student = await Student.findById(req.params.studentId).populate(
        'mentor'
      );
      res.json(student.mentor);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports={
    studentRouter
}