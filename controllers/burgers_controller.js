var express = require("express");
var app = express();
var router = express.Router();

var burger = require("../models/burger");


router.get("/", function(req,res) {
    burger.allBurgers(function(data) {
        res.render("index", {burgs: data});
    });
});

router.post("/api/burgers", function(req,res) {
    burger.createBurger(["burger_name"], [req.body], function(result) {
        res.json({ id: result.insertId});
    });
});

module.exports = router;

