import { data } from "../data.js";

function getOneUses(req, res) {
  const userId = req.params.username;

  try {
    const user = data[1].tweet.filter((useId) =>
        useId.tweet_content.tweet_body.tweet_title.tweet_title_details.slice(1) == userId
    );
    if (!user) throw new Error("User not found");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default getOneUses;
