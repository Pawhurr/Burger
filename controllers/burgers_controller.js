var express = require("express");
var app = express();
var router = express.Router();

var burger = require("../models/burger");


router.get("/", function (req, res) {
    burger.allBurgers(function (data) {
        res.render("index", { burgs: data });
    });
});

router.post("/api/burgers", function (req, res) {
    var burgerName = req.body
    burger.createBurger(burgerName, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;

    console.log(id);

    burger.updateBurger(id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

