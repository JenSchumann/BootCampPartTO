const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public');)

//to test server:  (transfering all routing to a controller/articles.js file)
// app.get('/', (req, res)=>{
//   res.send('do ammo can lifts!')
//   console.log('we do ammo can lifts together!!');
// });

const articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);


mongoose.connect('mongodb://localhost:27017/bootcamptooo');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});



<<<<<<< HEAD













=======
>>>>>>> 2c51994a1ed54d29de4b475af7d69d1101614c20
app.listen(3000, ()=>{
    console.log('BootCampPartTo is listening, oorah!');
});
