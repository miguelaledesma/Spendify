const UserSchema = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      throw new Error("No token provided");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    const user = await UserSchema.findById(decoded.userId);
    if (!user) {
      throw new Error("User not found");
    }
    req.token = token;
    req.user = user;
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = auth;
