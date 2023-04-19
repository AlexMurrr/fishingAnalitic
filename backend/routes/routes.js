const express= require('express');
const ex = require('../controllers/ex.js');

const showPlace = ex.showPlace;
const seneIndex = ex.sendIndex;

const router = express.Router();

router.get('/place', showPlace);
router.get('/', seneIndex);

module.exports = router;