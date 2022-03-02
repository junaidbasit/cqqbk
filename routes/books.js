const express = require("express");
const { booksController } = require("../controller")
const bookRouter = express.Router();

bookRouter.get("/", booksController.allBooks);
bookRouter.post("/", booksController.addBook);
bookRouter.get("/:id", booksController.getBook);
bookRouter.put("/:id", booksController.updateBook);
bookRouter.delete("/:id", booksController.deleteBook);
bookRouter.get("/students-books",booksController.studentBooks);
bookRouter.get("/students-books/:id",booksController.studentBooksById),
module.exports = bookRouter;
