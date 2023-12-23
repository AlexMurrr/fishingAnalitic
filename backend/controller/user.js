import { getUser } from "../model/getUser.js";

export const user = (req, res) => {
  getUser((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
