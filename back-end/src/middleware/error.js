const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  // Jsonwebtoken error catch
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token không tồn tại. Thử lại`;
    err = new ErrorHandler(message, 404);
  }
  // Id error catch
  if (err.name === "TokenExpiredError") {
    const message = `Json web token đã hết hạn. Thử lại`;
    err = new ErrorHandler(message, 404);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
