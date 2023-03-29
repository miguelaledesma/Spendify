const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  try {
    const { title, amount, type, date, category, description } = req.body;

    // validate user ID in token matches request user ID
    // if (req.user._id.toString() !== req.params.userId) {
    //   return res.status(401).json({ error: "Unauthorized" });
    // }

    const income = new IncomeSchema({
      userId: req.user._id,
      title,
      amount,
      type,
      date,
      category,
      description,
    });

    await income.save();

    res.status(200).json({
      message: "income created successfully",
      income,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

//add method to read from db

exports.getIncome = async (req, res) => {
  try {
    const allIncomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(allIncomes);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving all incomes in DB. Check Server.",
      error: error.message,
    });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Income has already been deleted, please check server",
        error: error.message,
      });
    });
};
