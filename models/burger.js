var orm = require("../config/orm");

var burger = {
    allBurgers: function (cb) {
        orm.selectAll("burgers", function (data) {
            cb(data);
        });
    },
    createBurger: function (name, cb) {
        orm.insertOne(name, function (res) {
            cb(res);
            // console.log(res);
        });
    },
    updateBurger: function (id, cb) {
        orm.updateOne(id, function (data) {
            cb(data);
        });
    }
}

module.exports = burger;

