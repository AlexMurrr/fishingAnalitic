const db = require("../config/db.js");

const place = (result) => {
    var sql =
    "SELECT * FROM place";   
    db.all(sql,[], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

module.exports = {place};