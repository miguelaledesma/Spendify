const mongoose = require("mongoose");
//connecting application to mongoDB using mongoose.
const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected!");
  } catch (error) {
    console.log(error, "Database connection error!");
  }
};

module.exports = { db };
