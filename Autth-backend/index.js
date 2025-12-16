require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 🔴 THIS MUST BE ABOVE ROUTES
app.use(cors());
app.use(express.json()); // ✅ REQUIRED

// routes
app.use("/api/auth", require("./routes/auth.routes"));

app.get("/", (req, res) => {
  res.send("Server Running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
