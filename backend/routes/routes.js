const {
  addIncome,
  getIncome,
  deleteIncome,
} = require("../controllers/incomeController");
const auth = require("../middleware/authentication");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expenseController");
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  userSignUp,
  userLogin,
} = require("../controllers/UserController");
const { addToWaitList } = require("../controllers/waitlistController");

const router = require("express").Router();

//post method to add income
router.post("/add-income", auth, addIncome);
//endpoint to retrieve incomes in database
router.get("/get-income", auth, getIncome);
//endpoint to delete income by id
router.delete("/delete-income/:id", deleteIncome);

//endpoint to add expense
router.post("/add-expense", auth, addExpense);
router.delete("/delete-expense/:id", deleteExpense);

// endpoint to get expenses
router.get("/get-expenses", auth, getExpenses);
//enpoint for creating new user, getting all users, getting user by id
router.post("/sign-up", userSignUp);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.delete("user/:id", deleteUserById);
router.post("/login", userLogin);

//waiting list endpoint:

router.post("/wait-list", addToWaitList);

module.exports = { router };
