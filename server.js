const express = require("express");
const io = require("socket.io");

const front = require("./lib/front");
const api = require("./lib/front");

const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public/"));
app.use("/", front);
app.use("/api", front);

app.listen(port, () => console.log("Listening on :" + port));