import Tweet from "../models/tweet.model.js";
import User from "../models/user.model.js";

export const getPublicTweets = async (req, res) => {
  try {
    const tweet = await Tweet.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    res.status(200).json(tweet);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserTweets = async (req, res) => {
  const { userId } = req.params;

  try {
    const tweet = await Tweet.findAll({
      where: {
        userId,
      },
    });

    res.status(200).json(tweet);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserTweet = async (req, res) => {
  const { userId, tweetId } = req.params;

  try {
    const tweet = await Tweet.findAll({
      where: {
        userId,
        id: tweetId,
      },
    });

    res.status(200).json(tweet);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTweet = async (req, res) => {
  const data = req.body;
  console.log(req.params);

  try {
    const createdTodo = await Tweet.create(data);

    res.status(200).json(createdTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTweet = async (req, res) => {
  const data = req.body;
  console.log(data);
  const { tweetId } = req.params;
  try {
    const updatedTweet = await Tweet.update(data, {
      where: {
        id: tweetId,
      },
    });

    console.log(updatedTweet);

    if (!updatedTweet) {
      return res.status(404).json({ Message: "Tweet Not Found" });
    }

    return res.status(200).json({ updatedTweet });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { tweetId } = req.params;

    const deletedTweet = await Tweet.destroy({ where: { id: tweetId } });

    if (!deletedTweet) {
      return res.status(500).json("Tweet not found");
    }

    res.status(200).json(deletedTweet);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error while delete tweet");
  }
};
