const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false; //
    return next();
  }
  const token = authHeader.split(" ")[1]; // Authorization: Bearer <tokenvalue>
  if (!token) {
    req.isAuth = false;
    return next();
  }
  let decodedtoken;
  try {
    decodedtoken = jwt.verify(token, "somesupersecretkey");
  } catch (err) {
    console.log("err couldn't decode token");
    req.isAuth = false;
    return next();
  }
  if (!decodedtoken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decodedtoken.userId;
  return next();
};
