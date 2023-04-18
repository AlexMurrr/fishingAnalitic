const showEx = require('../models/fishModel.js');

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

module.exports = {showPlace};