const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  try {
    const { title, amount, type, date, category, description } = req.body;

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
    const user = req.user._id.toString();
    console.log(user);
    const userIncome = await IncomeSchema.find({
      userId: user,
    }).sort({
      createdAt: -1,
    });
    console.log(userIncome);
    res.status(200).json(userIncome);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving incomes for user. Check Server.",
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
