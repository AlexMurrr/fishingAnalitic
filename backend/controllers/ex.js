const showEx = require('../models/fishModel.js');
const path = require('path');

const place = showEx.place;

const showPlace = (req, res) => {
    place((err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

const sendIndex = (req, res) => {
    res.sendFile('D:\\myJS\\fishing\\frontend\\public\\index.html');   
}

module.exports = {showPlace, sendIndex};