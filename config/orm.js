var connection = require("../config/connection");

var orm = {

selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err,res) {
        if (err) throw err;
        cb(res);

    });
},

insertOne: function(burgerName, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (??)";
    connection.query(queryString, [burgerName.toString()], function(err,res) {
        if (err) throw err;
        cb(res);

    });
}
// insertOne();

// updateOne();

};



module.exports = orm;