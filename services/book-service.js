
const dbConection = require("../config/knex");

const getAllBooks = async () => {
    const books = dbConection.select().table('book');
    return books
};

const addBook = async (data) => {
    await dbConection("book").insert(data);
};

const getBookById = async (id) => {
    const book = await dbConection("book").where("id", id);
    return book;
};

const updateBookById = async (id, data) => {
    await dbConection("book")
        .where("id", id)
        .update(data)
};

const deleteBookById = async (id) => {
    await dbConection("book")
        .where("id", id)
        .del()
};
const studentBooks = async () => {
    const data = await dbConection("book")
        .join('student', 'book.borrowed_by', '=', 'student.id')
        .select(
            "book.id",
            "book.book_name",
            "book.author_name",
            "student.first_name",
            "student.last_name",
            "book.date_borrowed",
            "book.date_return"
        );
    return data;
};
const getStudentBooksById = async (id) => {
    const book = await dbConection
        .select(
            "book.id",
            "book.book_name",
            "book.author_name",
            "student.first_name",
            "student.last_name",
            "book.date_borrowed",
            "book.date_return"
        )
        .from("book").where("book.id", id)
        .leftOuterJoin("student", function () {
            this.on("student.id", "=", "book.borrowed_by");
        });
    return book;
};

module.exports = {
    getAllBooks,
    addBook,
    getBookById,
    updateBookById,
    deleteBookById,
    studentBooks,
    getStudentBooksById
}
//     book_name: req.body.bookName,
// author_name: req.body.authorName,
// borrowed_by: req.body.student_id,
// date_borrowed: req.body.dateBorrowed,
// date_return: req.body.expectedReturn,