require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

//middleware below
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello World");
});

const server = () => {
  app.listen(PORT, () => {
    console.log(`Server is running, Listening on PORT ${PORT}!`);
  });
};

server();
