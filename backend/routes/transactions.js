const {
  addIncome,
  getIncome,
  deleteIncome,
} = require("../controllers/incomeController");

const { addExpense } = require("../controllers/expenseController");

const router = require("express").Router();

//post method to add income
router.post("/add-income", addIncome);
//endpoint to retrieve incomes in database
router.get("/get-income", getIncome);
//endpoint to delete income by id
router.delete("/delete-income/:id", deleteIncome);

//endpoint to add expense
router.post("/add-expense", addExpense);
module.exports = { router };
