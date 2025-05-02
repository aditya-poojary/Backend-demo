require('dotenv').config();
const express = require('express');

const app = express();

// const port = 4000;

app.get('/' , (req, res) => {
    res.send('Hi slow backend developer')
});

app.get('/twitter', (req,res) =>{
    res.send('You dont have a active account')
})

app.listen(process.env.PORT, ()=>{
    console.log('Congrates you made a server')
})