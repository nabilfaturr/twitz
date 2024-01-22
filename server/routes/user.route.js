import express from "express";
import {
  createTweet,
  updateTweet,
  getPublicTweets,
  getUserTweets,
  getUserTweet,
  deleteTweet,
} from "../controllers/user.controller.js";
import { isUserExist, verifyUser } from "../middleware/verify.js";

const router = express.Router();

router.get("/tweets", isUserExist, getPublicTweets); // done
router.get("/tweets/:userId", isUserExist, verifyUser, getUserTweets); // done
router.get("/tweet/:userId/:tweetId", isUserExist, getUserTweet); // done
router.post("/tweet/:userId", isUserExist, verifyUser, createTweet); // done
router.put("/tweet/:userId/:tweetId", isUserExist, verifyUser, updateTweet); // done
router.delete("/tweet/:userId/:tweetId", isUserExist, verifyUser, deleteTweet); // done

export default router;
