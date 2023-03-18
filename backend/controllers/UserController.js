const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/UserModel");

exports.userSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "user already exists" });
      return;
    }
    if (!email || !password) {
      res.status(400).json({
        error: "email and password are required to create a profile",
      });
      return;
    }
    //hashed Password for added security
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = UserSchema({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({
      message: "new user successfully created",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserSchema.find().sort({ createdAt: -1 });
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await UserSchema.findById(userId);
    if (!user) {
      res.status(404).json({
        message: "cannot find user",
        error: error.message,
      });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({
      message: "server error, please try again",
      error: error.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const userToDelete = await UserSchema.findByIdAndDelete(userId);
    if (!userToDelete) {
      res.status(404).json({
        message: "user not found",
        error: error.message,
      });
    } else {
      res.status(200).json({ message: "user deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: "error when trying to delete user by id",
      error: error.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "Invalid Email",
      });
      return;
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.status(400).json({
        message: "Invalid Password",
      });
      return;
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      message: "Login Successful",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};
