const {
  addIncome,
  getIncome,
  deleteIncome,
} = require("../controllers/incomeController");

const router = require("express").Router();

//post method to add income
router.post("/add-income", addIncome);
//endpoint to retrieve incomes in database
router.get("/get-income", getIncome);
//endpoint to delete income by id
router.delete("/delete-income", deleteIncome);
module.exports = { router };
