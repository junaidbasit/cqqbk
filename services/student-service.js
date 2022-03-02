
const dbConection = require("../config/knex");

const getAllStudents = async () => {
    const books = dbConection.select().table('student');
    return books
};

const addStudent = async(data) => {
    await dbConection("student").insert(data);

};

const getStudentById = async(id) => {
    const student = await dbConection("student").where("id", id);
    return student;
};

const updateStudentById = async(id, data) => {
    await dbConection("student")
        .where("id", id)
        .update(data)
};

const deleteStudentById = async (id) => {
    await dbConection("student")
        .where("id", id)
        .del()
};

module.exports = {
    getAllStudents,
    addStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById
}
