import { data } from "../data.js";

function getOneUses(req, res) {
  const userId = req.params.username;

  try {
    const user = data[1].tweet.filter(
      (useId) =>
        useId.tweet_content.tweet_body.tweet_title.tweet_title_details.slice(
          1
        ) == userId
    );
    if (!user) throw new Error("User not found");
    const a = {
      userInfo: {
        titleAuthor:
          user[0].tweet_content.tweet_body.tweet_title.tweet_title_author,
        references:
          user[0].tweet_content.tweet_body.tweet_title.tweet_title_details,
        avatar: user[0].tweet_content.tweet_body.tweet_title.images,
        followers:
          user[0].tweet_content.tweet_body.tweet_title.tweet_title_details,
        date: user[0].tweet_content.tweet_body.tweet_title.date,
      },
    };
    res.status(200).json([a, ...user]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default getOneUses;
