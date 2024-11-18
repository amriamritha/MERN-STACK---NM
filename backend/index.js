const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // Ensure environment variables are loaded before using them
const cors = require("cors");
const connectToDB = require("./config/connectToDB");

// Verify if the PORT is loaded correctly
console.log("PORT:", process.env.PORT); // Add this to check if PORT is defined

const app = express();
const PORT = process.env.PORT || 8001;  // Default to 8001 if PORT is undefined

// Connect to DB
connectToDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
  console.error("Middleware Error:", err);
  res.status(500).json({ message: "Something went wrong", success: false });
});

// Routes (ensure you have these routes in place)
app.use('/api/user/', require('./routes/userRoutes'));
app.use('/api/admin/', require('./routes/adminRoutes'));
app.use('/api/doctor', require('./routes/doctorRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
