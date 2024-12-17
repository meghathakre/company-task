const teaModel= require("../models/taskModel");

const taskDataSave=async(req, res)=>{
    const {tittle, description, duedate, priority}= req.body;
     try {
        const Student=await teaModel.create({
            tittle:tittle,
            description:description,
            duedate:duedate,
            priority:priority
        })  
        res.status(200).json(Student);
     } catch (error) {
        res.status(404).json("MongoDB Server No Strated!!!");
     }
}





const taskDataDisplay=async(req, res)=>{
 
    try {
        const teadata= await teaModel.find();
        res.status(200).json(teadata);
    } catch (error) {
         res.status(404).json("Data from MongoDB not Found!")
    }
}



const teacherUpdateDataDisplay=async(req, res)=>{
     const Data= await teaModel.find();
     res.send(Data);
}

const teacherDataDelete=async(req, res)=>{
   const myid= req.body.id;
   const teacher=await  teaModel.findByIdAndDelete(myid);   
   res.send("record deleted!")
}
const teacherDataEdit=async(req, res)=>{
    const id=req.body.id;
    const teacherdata= await  teaModel.findById(id);
    res.send(teacherdata);
}
const teacherDataEditSave=async(req, res)=>{
    const {_id, tittle, description, duedate,priority} = req.body;

    const teachdata= await teaModel.findByIdAndUpdate(_id, {
        tittle:tittle,
        description:description,
        duedate:duedate,
        priority:priority
    })
   
    res.send("Data succesfully updated!!!");
}




module.exports={
    taskDataSave,
    taskDataDisplay,
   
    teacherUpdateDataDisplay,
    teacherDataDelete,
    teacherDataEdit,
teacherDataEditSave
   
}