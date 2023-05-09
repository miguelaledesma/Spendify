const mongoose = require("mongoose");

const WaitlistSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      trim: true,
      maxLength: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Waitlist", WaitlistSchema);
