// Read

import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// update

export const addRemoveFriends = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    //checking if friend is already added
    if (user.friend.includes(friendId)) {
      //filtering the friend list without the friend
      user.friends = user.friends.filter((id) => id !== friendId);
      //also the friend's friend list
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      //adding the friend to the friend list
      user.friends.push(friendId);
      //the same for the friend's friend list too so that they wil lbe on the friend list for each other
      friend.friends.push(friendId);
    }

    await user.save();
    await friend.save();

    //alternative
    // await User.updateOne(
    //   { _id: id },
    //   { $set: { friends: user.getUserFriends } }
    // );

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
