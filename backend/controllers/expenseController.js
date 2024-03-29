const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, category, description, date } = req.body;
    //create a new instance of the ExpenseSchema, pass in the properties from the request body

    const expense = ExpenseSchema({
      userId: req.user._id,
      title,
      amount,
      category,
      description,
      date,
    });

    await expense.save();
    res.status(200).json({
      message: "Expense successfully added!",
    });
    console.log(expense);
  } catch (error) {
    res.status(500).json({
      message: "Server error, check values, check database connection",
      error: error.message,
    });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const userId = req.user._id;
    const userExpenses = await ExpenseSchema.find({ userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(userExpenses);
  } catch (error) {
    res.status(500).json({
      message:
        "Error retrieving expenses for the user, check database or make sure user is authenticated",
      error: error.message,
    });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Income deleted" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Income has already been deleted, please check server",
        error: error.message,
      });
    });
};
