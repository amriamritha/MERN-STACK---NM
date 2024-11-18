const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    // Access MONGO_DB variable from .env
    const MONGODB_URI = process.env.MONGO_DB;
    
    if (!MONGODB_URI) {
      console.error("MongoDB URI is not defined. Please check your .env file.");
      process.exit(1); // Exit the process with failure
    }

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(`Could not connect to MongoDB: ${err.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectToDB;
