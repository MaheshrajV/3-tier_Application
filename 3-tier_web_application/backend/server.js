import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Health check endpoint
app.get("/api", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "Backend is running", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Example: Query database for matching username/password
    // Replace table/column names with your actual schema
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length > 0) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(process.env.BACKEND_PORT || 5000, () => {
  console.log(`Backend running on port ${process.env.BACKEND_PORT || 5000}`);
});
