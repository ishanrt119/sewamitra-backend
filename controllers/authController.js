const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.registerUser = async (req, res) => {
  const { name, email, phone, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.loginUser = async (req, res) => {
  // you can fill this in later
  res.status(200).json({ message: "Login route works" });
};
