require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { db } = require("./db/database");
const { readdirSync } = require("fs");

const app = express();
const PORT = process.env.PORT;

//middleware below
app.use(express.json());
app.use(cors());

//Routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route).router)
);

//db is connected, when server runs, should see "db connected"
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Server is running, Listening on PORT ${PORT}!`);
  });
};

server();
