import Admin from "../models/admin.model.js";
import User from "../models/user.model.js";

export const isUserExist = async (req, res, next) => {
  try {
    if (req.session.user && req.session.user.role === "user") {
      console.log("Pass isUserExitMiddleware");
      next();
    } else {
      res.status(500).json({ Message: "User do not exist, pls sign up" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const verifyUser = async (req, res, next) => {
  try {
    const { user, role } = req.session.user;
    const { userId } = req.params;
    if (req.session.user && role === "user") {
      console.log({ userId });
      console.log(user.id);

      if (userId != user.id) {
        return res.status(500).json({ Message: "Not Authorized" });
      }

      console.log("Pass verifyUserMiddleware");
      next();
    } else {
      res.status(500).json({ Message: "Not Authorized" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const verifyAdmin = async (req, res, next) => {
  try {
    const { user, role } = req.session.user;
    if (role !== "admin") {
      return res
        .status(500)
        .json({ Message: "Not Authorized, Your not admin" });
    }

    next();
  } catch (error) {
    res.status(500).json({ Message: "Not Authorized" });
  }
};
