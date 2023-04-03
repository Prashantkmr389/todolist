
const express = require("express");
const router = require("../Todo List/routes");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;


app.use(express.urlencoded());
app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/",require("./routes/"));


const db = require("./config/mongoose");


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


