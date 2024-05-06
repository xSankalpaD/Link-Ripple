const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const {registerUser, loginUser} = require('./controllers/auth');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/linkTree')
    .then(() => {
        console.log(`mongodb Connected`)
    })
    .catch(err => {
        toast.error('Username or Email already in use!')
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