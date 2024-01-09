const express = require('express')
const mongoose = require('mongoose')
const { MONGODB_URL,PORT } = require('./utils/config')
const { mentorRouter } = require('./controllers/mentorRouter')
const { studentRouter } = require('./controllers/studentRouter')


const app = express()
app.use(express.json())
mongoose.set('strictQuery',false)

mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log('Connected to MongoDB!')
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err)=>{
        console.error("Error message:",err)
    })
app.use('/api/mentors',mentorRouter)
app.use('/api/students',studentRouter)