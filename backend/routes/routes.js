const express= require('express');
const ex = require('../controllers/ex.js');

const showPlace = ex.showPlace;

const router = express.Router();

router.get('/', showPlace);

module.exports = router;