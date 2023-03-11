const {
  addIncome,
  getIncome,
  deleteIncome,
} = require("../controllers/incomeController");

const router = require("express").Router();

//post method to add income
router.post("/add-income", addIncome);
router.get("/get-income", getIncome);
router.delete("/delete-income", deleteIncome);
module.exports = { router };
