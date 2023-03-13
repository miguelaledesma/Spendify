const mongoose = require("mongoose");

/** Schema for expenses */

const ExpenseSchema = new mongoose.Schema(
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
      default: "expense",
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

//Exporting schema for use.
module.exports = mongoose.model("Expense", ExpenseSchema);
