const WaitlistSchema = require("../models/WaitlistModel");

const nodemailer = require("nodemailer");

exports.addToWaitList = async (req, res) => {
  try {
    const { email } = req.body;
    //create a new instance of the ExpenseSchema, pass in the properties from the request body
    const existingUserOnWaitList = await WaitlistSchema.findOne({ email });
    if (existingUserOnWaitList) {
      res.status(400).json({ message: "Email already on the waitlst" });

      return;
    }
    const userOnWaitList = new WaitlistSchema({
      email,
    });

    await userOnWaitList.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "login",
        user: `${process.env.GMAIL_EMAIL}`,
        pass: `${process.env.GMAIL_PASSWORD}`,
      },
    });

    const mailOptions = {
      from: `${process.env.GMAIL_EMAIL}`,
      to: email,
      subject: "Spendify AI Waitlist Confirmation",
      text: "Thank you for joining the waitlist! We will notify you once Spendify AI is ready!",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email", error);
      } else {
        console.log(Sent, info.response);
      }
    });
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
