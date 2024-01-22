import User from "../models/user.model.js";
import Admin from "../models/admin.model.js";

export const signIn = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const findUser = async (model) => {
      return await model.findOne({
        where: {
          username,
          password,
        },
      });
    };

    const admin = await findUser(Admin);
    let role = admin ? "admin" : "user";
    let user = admin;

    if (!admin) {
      user = await findUser(User, username, password);
      if (!user) {
        return res.status(404).json({ Message: "Invalid!" });
      }
    }

    req.session.user = { user, role };
    const cookies = req.session.user;

    // console.log(cookies);
    // console.log(req.session.user);
    return res.json({ message: "Login Success", user, role });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signUp = async (req, res, next) => {
  const { nama, email, username, password, no_telepon } = req.body;
  const data = req.body;

  try {
    const existUser = await User.create(data);

    console.log(existUser);

    if (!existUser) {
      return res.status(404).json({ Message: "Invalid!" });
    }

    res.json({ message: "Login Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signOut = async (req, res, next) => {
  try {
    req.session.destroy();
    return res.status(200).json("Success");
  } catch (error) {
    return res.json(error);
  }
};
