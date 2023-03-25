import Post from "../models/post.js";
import User from "../models/User.js";

export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsersPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const likePost = () => {};

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    await Post.create({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description: description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });

    //need to return all the post, so that the feed is updated with the person's post
    const allPost = await Post.find();
    res.status(201).json(allPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
