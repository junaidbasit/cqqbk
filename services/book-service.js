
const dbConection = require("../config/db-connection");

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
    await dbConection
        .select(
            "book.id",
            "book.book_name",
            "book.author_name",
            "student.first_name",
            "student.last_name",
            "book.date_borrowed",
            "book.date_return"
        )
        .from("book")
        .leftOuterJoin("student", function () {
            this.on("student.id", "=", "book.borrowed_by");
        });
};


module.exports = {
    getAllBooks,
    addBook,
    getBookById,
    updateBookById,
    deleteBookById,
    studentBooks
}
//     book_name: req.body.bookName,
// author_name: req.body.authorName,
// borrowed_by: req.body.student_id,
// date_borrowed: req.body.dateBorrowed,
// date_return: req.body.expectedReturn,