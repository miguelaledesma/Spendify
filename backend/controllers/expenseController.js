const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  //create a new instance of the incomeSchema, pass in the properties from the request body

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  //sending to database using try/catch (need validations first)
  try {
    //validations, need all fields to be filled out.
    if (!title || !amount || !category || !description || !date) {
      res.status(400).json({
        error:
          "all fields are required. eg, title, amount, category, description, date",
      });
    }
    if (isNaN(amount) && amount <= 0) {
      res.status(400).json({
        error:
          "amount needs to be greater than 0, amount needs to be a positive number",
      });
    }
    await expense.save();
    res.status(200).json({
      message: "Income successfully added!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error, check values, check database connection",
      error: error.message,
    });
  }
  console.log(expense);
};
