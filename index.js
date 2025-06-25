const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const loginRoutes = require('./routes/login');
const enquiryRoutes=require('./routes/enquiry');
const contactRoutes=require('./routes/contact');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/login", loginRoutes);
app.use('/api/enquiry',enquiryRoutes);
app.use('/api/contact',contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
