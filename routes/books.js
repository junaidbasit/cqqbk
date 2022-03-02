const express = require("express");
const { booksController } = require("../controller")
const bookRouter = express.Router();

bookRouter.get("/", booksController.allBooks);
bookRouter.post("/", booksController.addBook);
bookRouter.get("/:id", booksController.getBook);
bookRouter.put("/:id", booksController.updateBook);
bookRouter.delete("/:id", booksController.deleteBook);
bookRouter.get("/students-books",booksController.studentBooks)

// // getting the student name with books (joining both tables)
// booksRouter.get("/students-books", async (req, res) => {
//   try {
//     const booksdata = await db
//       .select(
//         "book.id",
//         "book.book_name",
//         "book.author_name",
//         "student.first_name",
//         "student.last_name",
//         "book.date_borrowed",
//         "book.date_return"
//       )
//       .from("book")
//       .leftOuterJoin("student", function () {
//         this.on("student.id", "=", "book.borrowed_by");
//       });
//     res.status(201).send({ booksdata });
//   } catch (err) {
//     res.send({ msg: err.message });
//   }
// });

// booksRouter.get("/students-books/:id", async (req, res) => {
//   try {
//     const book = await db
//       .select(
//         "book.id",
//         "book.book_name",
//         "book.author_name",
//         "student.first_name",
//         "student.last_name",
//         "book.date_borrowed",
//         "book.date_return"
//       )
//       .from("book").where("book.id", req.params.id)
//       .leftOuterJoin("student", function () {
//         this.on("student.id", "=", "book.borrowed_by");
//       });
//     res.status(201).send({ book });
//   } catch (err) {
//     res.send({ msg: err.message });
//   }
// });

module.exports = bookRouter;
