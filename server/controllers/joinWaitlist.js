const User = require("../models/user");
const joinlist = async (req, res) => {
  const { name, email, college } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const newUser = new User({ name, email, college });
    await newUser.save();
    res.status(201).json({ message: "Successfully added to waitlist!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = joinlist;
