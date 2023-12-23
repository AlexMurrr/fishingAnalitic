import db from '../config/db.js'

export const getUser = (result) => {
    db.query(
      "SELECT name FROM fishing.user ORDER BY rand() LIMIT 1",
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };