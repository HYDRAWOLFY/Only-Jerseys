const express = require("express");
const app = express();
const port = 3000;


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

// homepage route
app.get('/',(req,res)=>{
    res.send(200);
});

// login page route
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + "/login.html");
});

// register page route
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + "/register.html");
});

