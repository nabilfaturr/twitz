import User from "../models/user.model.js";
import Tweet from "../models/tweet.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTweet = await Tweet.destroy({
      where: {
        userId: id,
      },
    });

    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });

    if (!deletedUser) {
      return res.status(404).json({ Message: "User Not Found" });
    }
    res.status(200).json({ Message: "Delete Success" });
  } catch (error) {
    res.status(500).json(error);
  }
};
