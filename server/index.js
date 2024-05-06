const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const {registerUser, loginUser} = require('./controllers/auth');

mongoose.connect('mongodb://127.0.0.1:27017/linkTree')
    .then(() => {
        console.log(`mongodb Connected`)
    })
    .catch(err => {
        console.log(err.message)
    });

    
app.get('/', (req, res) => {
    res.send("Hello World!");
})



app.post('/api/register', registerUser)
app.post('/api/login', loginUser)

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})