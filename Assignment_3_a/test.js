const express=require('express');
const app=express();

app.get('/',(req,res) => {
    res.sendFile(__dirname+('/public/home.html'));
})

app.get('/about.html',(req,res) => {
    res.sendFile(__dirname+('/public/about.html'));
})

app.get('/user.html',(req,res) => {
    res.sendFile(__dirname+('/public/user.html'));
})

app.listen(3000);