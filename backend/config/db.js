import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AAAAAAA",
  database: "fishing",
});

export default db;