var connection = require("../config/connection");

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

selectAll();

insertOne();

updateOne();

module.exports = ORM;