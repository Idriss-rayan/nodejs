const express = require('express');
const app = express()

 a = 0;

app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.send(`Home Page ${a++}`)
})

app.get('/about' , (req,res)=>{
    res.send('About page')
})

app.all

app.listen(5000,()=>{
    console.log('server is listening on the port 5000...')
})