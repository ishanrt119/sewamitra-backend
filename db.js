require("dotenv").config(); // at the top
const uri = process.env.MONGO_URI;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ishantoraskar23:l4Q9IxasOT3bdLjM@sevamitra.2gv18wc.mongodb.net/sevamitra",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
