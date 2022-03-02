
const HttpStatus = require('http-status-codes');
const { bookService } = require('../services')

const allBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(HttpStatus.StatusCodes.OK).json({ books });
    } catch (err) {
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
};

const addBook = async (req, res) => {
    try {
        const body = req.body;
        const data = {
            book_name: body.bookName,
            author_name: body.authorName,
            borrowed_by: body.student_id,
            date_borrowed: body.dateBorrowed,
            date_return: body.expectedReturn,
        };
        await bookService.addBook(data);
        res.status(HttpStatus.StatusCodes.CREATED).json({ success: true, message: "Record Inserted" });
    } catch (err) {
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    };
};

const getBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await bookService.getBookById(id);
        if (book && book.length > 0) {
            res.status(HttpStatus.StatusCodes.OK).json({ book });
        }
        else {
            res.status(HttpStatus.StatusCodes.OK).json({ message: "Book Not Found." });
        };
    } catch (err) {
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const data = {
            book_name: req.body.bookName,
            author_name: req.body.authorName,
            borrowed_by: req.body.student_id,
            date_borrowed: req.body.dateBorrowed,
            date_return: req.body.expectedReturn,
        }
        await bookService.updateBookById(id, data);
        res.status(HttpStatus.StatusCodes.OK).json({ success: true, message: "Record Updated" });
    } catch (err) {
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    };
};

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        await bookService.deleteBookById(id);
        res.status(HttpStatus.StatusCodes.OK).json({ success: true, message: "Record Deleted!" });
    } catch (err) {
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
};

const studentBooks = async (req, res) => {
    try {
        const booksdata = await bookService.studentBooks()
        res.status(HttpStatus.StatusCodes.OK).json({ booksdata });
    } catch (err) {
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
};
const studentBooksById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await bookService.getStudentBooksById(id)
        res.status(HttpStatus.StatusCodes.OK).json({ book });
    } catch (err) {
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
};


module.exports = {
    allBooks,
    deleteBook,
    updateBook,
    getBook,
    addBook,
    studentBooks,
    studentBooksById

};