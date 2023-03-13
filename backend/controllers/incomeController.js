const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  //create a new instance of the incomeSchema, pass in the properties from the request body
  /**
   * added income should return: 
{
  title: 'title',
  amount: 1000,
  type: 'income', this is default, no need to pass it in. 
  date: 2023-03-09T05:00:00.000Z,
  category: 'Hello this is edited',
  description: 'String',
  _id: new ObjectId("640ba0a4a6404c857626bb13")
}
   */
  const income = IncomeSchema({
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
    if (typeof amount !== "Number" && amount <= 0) {
      res.status(400).json({
        error:
          "amount needs to be greater than 0, amount needs to be a positive number",
      });
    }
    await income.save();
    res.status(200).json({
      message: "Income successfully added!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error, check values, check database connection",
      error: error.message,
    });
  }
  console.log(income);
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
