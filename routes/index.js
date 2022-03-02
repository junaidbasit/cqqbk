const express = require("express");

const router = express.Router();
const student = require("./student")
const books = require("./books")

router.use("/students", student);
router.use("/books", books);

module.exports = router;