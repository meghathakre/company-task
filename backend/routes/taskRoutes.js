const express = require("express");
const route= express.Router();
const teaController= require("../controllers/taskController");

route.post("/tasksave", teaController.taskDataSave);
route.get("/taskdisplay", teaController.taskDataDisplay);

route.get("/teacherupdatedisplay", teaController.teacherUpdateDataDisplay);
route.post("/teacherdatadelete", teaController.teacherDataDelete);
route.post("/teachereditdata", teaController.teacherDataEdit);
route.post("/teachereditsave", teaController.teacherDataEditSave);



module.exports=route;