const mongoose = require("mongoose");
const teaSchema= new mongoose.Schema({
    tittle:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    duedate:{
        type:String,
        require:true
    },
    priority:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model("task", teaSchema);