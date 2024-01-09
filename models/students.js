const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    id:Number,
    name:String,
    mentor:{type:mongoose.Schema.Types.ObjectId, ref:'Mentor'}
})
module.exports = mongoose.model('Student',studentSchema,'Students')