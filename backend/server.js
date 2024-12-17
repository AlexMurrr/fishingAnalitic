const { json } = require('express');
const express = require('express');
const {connectToDb, getDb} = require('./db');

const PORT = 3001;

const app = express();
app.use(express.json());

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

const handelError = (res, error) => {
    res.status(500).json({error});
}

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
        handelError(res, 'Somthng error...');
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
            handelError(res, 'Somthng error...');   
      })  
    });

app.post('/users', (req, res) => {
    db
      .collection('users')
      .insertOne(req.body)     
      .then((result) =>{
        res
        .status(201)
        .json(result)
      })
      .catch(()=>{
        handelError(res, 'Somthng error...');
    })
})    