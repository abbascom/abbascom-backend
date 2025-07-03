import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Abbascom API is running");
});

// Add more routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
