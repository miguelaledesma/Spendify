const WaitlistSchema = require("../models/WaitlistModel");

exports.addToWaitList = async (req, res) => {
  try {
    const { email } = req.body;
    //create a new instance of the ExpenseSchema, pass in the properties from the request body

    const userOnWaitList = new WaitlistSchema({
      email,
    });

    await userOnWaitList.save();
    res.status(200).json({
      message: "Added to the mailing list",
    });
    console.log(userOnWaitList);
  } catch (error) {
    res.status(500).json({
      message: "Server error, check email, check database connection",
      error: error.message,
    });
  }
};
