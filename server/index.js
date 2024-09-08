const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const {registerUser, loginUser} = require('./controllers/auth');
require('dotenv').config();
const {dashBoardData} = require('./controllers/dashboard');
const {getUserData, getUserSocials} = require('./controllers/getUserData');
const {saveSocials, saveProfile, saveLinks} = require('./controllers/saveItems');
const {loadSocials, loadLinks} = require('./controllers/loadPrevious');

app.use();
app.use(express.json(cors(
    {
        origin:["https://linkripple.vercel.app"],
        methods:["POST","GET"],
        credentials: true
    }
)));
 

require('dotenv');
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log('MongoDB connection failed.');
    });

    
app.get('/', (req, res) => {
    res.send("Hello World!");
})



app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

app.post('/data/dashboard', dashBoardData);

app.get('/get/:handle', getUserData);

//app.get('/get.socials/:handle', getUserSocials);

 
app.post("/save/socials", saveSocials);
app.post("/save/profile", saveProfile);
app.post("/save/links", saveLinks);
app.post("/load/socials", loadSocials);
app.post("/load/links", loadLinks);


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})