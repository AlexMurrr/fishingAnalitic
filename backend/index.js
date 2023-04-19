const express = require('express');
const cors = require('cors');
const router = require('./routes/routes.js');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, '../frontend/public')));
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
