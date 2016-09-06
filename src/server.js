var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var app = express();
var mongoose = require("mongoose");


app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/sell", require("./routes/routes.js"))
app.use(express.static("../public"));


mongoose.connect("mongodb://localhost/personal", function () {
    console.log("your data base server is running ")
})

app.listen(8000, function () {
    console.log("your server is running")
})