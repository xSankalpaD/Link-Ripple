const User= require('../models/user');


const registerUser = (req, res) => {
    res.send("Register");
}

const loginUser = (req, res) => {
    res.send("Login");
}

module.exports = {registerUser, loginUser};