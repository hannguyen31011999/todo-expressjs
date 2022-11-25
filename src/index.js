const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;
const router = require("./routes");
const bodyParser = require("body-parser");
const database = require("./configs/db.config");

// connect db
database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(router);

app.listen(port, () => console.log("App listening at localhost:8000"));
