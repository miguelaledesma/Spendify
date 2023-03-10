//import mongoose
const mongoose = require("mongoose");

//create schema for income, add rules for each field

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      require: true,
      trim: true,
      maxLength: 20,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      require: true,
    },
    category: {
      type: String,
      require: true,
      trim: true,
      maxLength: 20,
    },
    description: {
      type: String,
      require: true,
      trim: true,
      maxLength: 50,
    },
  },
  { timestamps: true }
);

//export mongoose model
module.exports = mongoose.model("Income", IncomeSchema);
