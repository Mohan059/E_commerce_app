import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/AuthRoute.js'
// Configure

dotenv.config();

// database

connectDB();

const app = express();
// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes

app.use ('/api/v1/auth', authRoutes);

// rest api

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to E_COMMERCE_APP_2023",
  });
});
//PORT
const PORT = process.env.PORT || 8080;

// server run

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
