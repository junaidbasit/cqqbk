const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const routes = require("./routes")
const port = process.env.port || 5000;

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors())
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});