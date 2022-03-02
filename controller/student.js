const HttpStatus = require('http-status-codes');
const { studentService } = require('../services')

const allStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(HttpStatus.StatusCodes.OK).json({ students });
    } catch (err) {
        res.send({ msg: err.message });
    }
};

const addStudent = async (req, res) => {
    try {
        const body = req.body;
        const data = {
            first_name: body.firstName,
            last_name: body.lastName,
        }
        await studentService.addStudent(data);
        res.status(HttpStatus.StatusCodes.CREATED).json({ success: true, message: "Record Inserted" });
    }
    catch (err) {
        res.send({ msg: err.message });
    };

}

const getStudent = async (req, res) => {
    try {
        const id = req.params && req.params.id ? req.params.id : "";
        const student = await studentService.getStudentById(id);
        if (student.length > 0) {
            res.status(HttpStatus.StatusCodes.OK).json({ student });
        }
        else {
            res.send({ message: "Student Not Found." });
        }
    } catch (err) {
        res.send({ msg: err.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const data = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
        }
        await studentService.updateStudentById(id, data);
        res.status(HttpStatus.StatusCodes.OK).json({ success: true, message: "Record Updated" });
    } catch (err) {
        res.send({ msg: err.message });
    };
};

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        await studentService.deleteStudentById(id);
        res.status(HttpStatus.StatusCodes.OK).json({ success: true, message: "Record Deleted!" });
    } catch (err) {
        res.send({ msg: err.message });
    }
};

module.exports = {
    deleteStudent,
    updateStudent,
    getStudent,
    addStudent,
    allStudents
}