export const sendToken = (res, user, statusCode, message) => {
  const token = user.JWTToken();

  const options = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.TOKEN_EXPIRES * 24 * 60 * 60 * 1000
    ),
  };
  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, message: message, user: userData });
};
