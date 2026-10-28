
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true,'plese provide a Task title'],
        trim:true,
        maxlength:[100,'title cannot be more than 100 cheracters']
    },
    completed:{
        type:Boolean,
        default:false
    }
},{timestamps: true});

module.exports = mongoose.model('Task',TaskSchema);