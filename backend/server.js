const express = require('express');
const {connectToDb, getDb} = require('./db');
const { ObjectId } = require('mongodb');

const PORT = 3001;

const app = express();

let db;

connectToDb((err) =>{
    if(!err){
        app.listen(PORT, (err)=>{
            err ? console.log(err) : console.log(`Listening port ${PORT}`);
        });
        db = getDb();
    }
    else{
        console.log(`DB connection error: ${err}`);
    }
})

app.get('/users', (req, res) =>{
    const users = [];
    db
      .collection('users')
      .find()
      .forEach((user) => users.push(user))
      .then(() =>{
        res
        .status(500)
        .json(users)
      })
      .catch(()=>{
        res
        .status(500)
        .json({error: "Error"});
    })
});

app.get('/users/:name', (req, res) =>{     
        db
        .collection('users')
        .findOne({"name": req.params.name})     
        .then((doc) =>{
          res
          .status(500)
          .json(doc)
        })
        .catch(()=>{
          res
          .status(500)
          .json({error: "Error"});        
      })  
    });