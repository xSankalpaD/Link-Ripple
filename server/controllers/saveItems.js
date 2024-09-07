const User = require("../models/user");
const jwt_decode = require("jwt-decode");
const jwt = require("jsonwebtoken");

//jwt-decode does not work anymore usign jsonwebtoken

const saveSocials = async (req, res) => {
  const { tokenMail, socials } = req.body;
  console.log(req.body);
  try {
    console.log('here');
    //const decodedTokenMail = jwt_decode(tokenMail, process.env.SECRET_JWT);
    const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    console.log(email);
    const user = await User.findOne({ email: email });
    console.log(user);
    user.socialMedia = socials;
    await user.save();
    return res.json({ message: "Saved", status: "success" });
  } catch (err) {
    return res.json({ status: "error", error: err.message });
  }
};
 
const saveProfile = async (req, res) => {
  const { tokenMail, name, bio, avatar } = req.body;
  console.log(req.body);
  try {
    const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    console.log(email);
    const user = await User.findOne({ email: email });
    console.log(user);
    user.name = name;
    user.bio = bio;
    user.avatar = avatar;
    await user.save();
    return res.json({ message: "saved", status: "success" });
  } catch (err) {
    return res.json({ status: "error", error: err.message });
  }
};
 
const saveLinks = async (req, res) => {
  const { tokenMail, links } = req.body;
  try {
    //const decodedTokenMail = jwt_decode(tokenMail, process.env.SECRET_JWT);
    const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    console.log(email);
    const user = await User.findOne({ email: email });
    console.log(user);
    const newLinks = links.map((link) => ({
      url: link.link.url,
      title: link.link.title,
      icon: ""
    }));
    user.links = newLinks;
    await user.save();
    return res.json({ message: "saved", status: "success" });
  } catch (err) {
    return res.json({ status: "error", error: err.message });
  }
};
 
module.exports = { saveSocials, saveProfile, saveLinks };