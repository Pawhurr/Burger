var orm = require("../config/orm");

var burger = {
    allBurgers: function(cb) {
        orm.selectAll("burgers", function(data) {
        cb(data);
    });
},
    createBurger: function(val, cb) {
        orm.insertOne(val, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;

