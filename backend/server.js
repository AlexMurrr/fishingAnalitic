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

app.post('/api/users', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    
    const hashedPassword = await bcrypt.hash(password, 10); 

    const insertSQL = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
    db.run(insertSQL, [username, hashedPassword, email], function(err) {
      if (err) {
        console.error('Ошибка при добавлении пользователя:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, username, email });
    });
  } catch (error) {
    console.error('Ошибка при хешировании пароля:', error.message);
    return res.status(500).json({ error: 'Ошибка при хешировании пароля' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});




