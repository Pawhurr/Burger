var connection = require("../config/connection");

var orm = {

selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err,res) {
        console.log(queryString);
        console.log(table);
        if (err) throw err;
        cb(res);

    });
},

insertOne: function(burgerName, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [(burgerName.name).toString()], function(err,res) {
        console.log(burgerName.name);
        if (err) throw err;
        cb(res);
        // console.log(res);

    });
},

updateOne: function(id, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString,[id], function(err,res) {
        console.log(id);
        console.log(queryString);
        console.log(res);
        if (err) throw err;
        cb(res);
    })
}


};



module.exports = orm;