const {
  addIncome,
  getIncome,
  deleteIncome,
} = require("../controllers/incomeController");

const { addExpense } = require("../controllers/expenseController");
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  userSignUp,
  userLogin,
} = require("../controllers/UserController");

const router = require("express").Router();

//post method to add income
router.post("/add-income", addIncome);
//endpoint to retrieve incomes in database
router.get("/get-income", getIncome);
//endpoint to delete income by id
router.delete("/delete-income/:id", deleteIncome);

//endpoint to add expense
router.post("/add-expense", addExpense);

//enpoint for creating new user, getting all users, getting user by id
router.post("/sign-up", userSignUp);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.delete("user/:id", deleteUserById);
router.post("/login", userLogin);
module.exports = { router };
