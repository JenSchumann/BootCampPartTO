const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('do ammo can lifts!')
  console.log('we do ammo can lifts together!!');
});



app.listen(3000, ()=>{
    console.log('BootCampPartTo is listening, oorah!');
});
