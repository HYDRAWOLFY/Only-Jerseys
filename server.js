const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

// middleware
app.use(express.static(`${__dirname}/public`));

// homepage route
app.get('/',(req,res)=>{
    // res.send(200);
    res.sendFile(__dirname + "/index.html");
});

// login page route
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + "/login.html");
});

app.post('/login',(req,res)=>{
    res.send("Posted!");
});

// register page route
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + "/register.html");
});

