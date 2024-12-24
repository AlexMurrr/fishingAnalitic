const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require("./db.js");
const path = require("path");
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());


const createTableSQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);
`;

db.run(createTableSQL, (err) => {
  if (err) {
      console.error('Ошибка при создании таблицы:', err.message);
  } else {
      console.log('Таблица "users" успешно создана или уже существует.');
  }
});

app.post('/api/users', (req, res) => {
  const { username, password, email } = req.body;

  const insertSQL = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
  db.run(insertSQL, [username, password, email], function(err) {
      if (err) {
          console.error('Ошибка при добавлении пользователя:', err.message);
          return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, username, email });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});




// mongoose
//   .connect(URL)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log(`DB connection error ${err}`));

//   app.listen(PORT, (err)=>{
//     err ? console.log(err) : console.log(`Listening port ${PORT}`);
// });

// let db;

// const handelError = (res, error) => {
//     res.status(500).json({error});
// }

// app.get('/users', (req, res) =>{
//     const users = [];
//     db
//       .collection('users')
//       .find()
//       .forEach((user) => users.push(user))
//       .then(() =>{
//         res
//         .status(500)
//         .json(users)
//       })
//       .catch(()=>{
//         handelError(res, 'Somthng error...');
//     })
// });

// app.get('/users/:name', (req, res) =>{     
//         db
//         .collection('users')
//         .findOne({"name": req.params.name})     
//         .then((doc) =>{
//           res
//           .status(500)
//           .json(doc)
//         })
//         .catch(()=>{
//             handelError(res, 'Somthng error...');   
//       })  
//     });

// app.post('/users', (req, res) => {
//     db
//       .collection('users')
//       .insertOne(req.body)     
//       .then((result) =>{
//         res
//         .status(201)
//         .json(result)
//       })
//       .catch(()=>{
//         handelError(res, 'Somthng error...');
//     })
// })    