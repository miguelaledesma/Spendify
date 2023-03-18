const mongoose = require("mongoose");

/** User Schema */

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      maxLength: 50,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      maxLength: 50,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      minLength: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
