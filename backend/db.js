const sqlite3 = require("sqlite3").verbose();

const dataSource = "fishing.db";

let db = new sqlite3.Database(dataSource, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

module.exports = db;