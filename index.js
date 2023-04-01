
const express = require("express");
const router = require("../Todo List/routes");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;


app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/",require("./routes/"));




app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


