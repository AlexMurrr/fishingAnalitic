const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const hash = bcrypt.hashSync('df', 10);
console.log(hash);

const PORT = 3000;
const URL = "";

const app = express();


// app.use(express.json());



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