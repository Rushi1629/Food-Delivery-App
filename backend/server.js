import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// App Config

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Middleware

app.use(express.json());
app.use(cors());

// API Endpoint

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use(express.static(path.join(__dirname, "../admin/dist")));
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  // DB Connection
  connectDB();
});

// mongodb+srv://rushikeshbhor1629:<db_password>@cluster0.mhr1u.mongodb.net/?
