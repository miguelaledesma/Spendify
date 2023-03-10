const { addIncome } = require("../controllers/incomeController");

const router = require("express").Router();

//post method to add income
router.post("/add-income", addIncome);

module.exports = { router };
