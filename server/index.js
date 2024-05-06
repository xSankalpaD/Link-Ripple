const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("Hello World!");
})

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})