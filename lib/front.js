const front = new require("express").Router();

front.get("/", (req, res) => {
    res.render("_layout");
});

module.exports = front;