import { User } from "../models/user.js";
import { sendToken } from "../utils/sendToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Enter all details" });
    }

    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(401)
        .json({ success: false, message: "User already Exists" });
    }

    user = await User.create({
      name,
      email,
      password,
    });

    sendToken(res, user, 200, "User Created Successfully");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Enter all details" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Username or Password" });
    }

    const isMatch = await user.ComparePassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Username or Password" });
    }

    sendToken(res, user, 200, "Logged In Successfully");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()) })
      .json({ success: true, message: "Logged Out Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
