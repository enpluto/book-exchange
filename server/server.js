const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// 允許跨域請求
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json()); // 用來處理 JSON 請求

// MongoDB 連接
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// 基本路由設置
app.get("/", (req, res) => {
  res.send("Welcome to the Book Exchange API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const helloRouter = require("./api/hello");
app.use("/api", helloRouter);
