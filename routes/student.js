const express = require("express");
const { studentController } = require("../controller")
const studentRouter = express.Router();

studentRouter.get("/", studentController.allStudents);
studentRouter.post("/", studentController.addStudent);
studentRouter.get("/:id", studentController.getStudent);
studentRouter.put("/:id", studentController.updateStudent);
studentRouter.delete("/:id", studentController.deleteStudent);

module.exports = studentRouter;
