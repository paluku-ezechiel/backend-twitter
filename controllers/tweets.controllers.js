import { data } from "../data.js";

let dataArr = data[1].tweet;

export function getAllTweets(req, res) {
    try {
        res.status(200).json(dataArr);
    } catch (error) {
        res.status(500).json({message:error});
    }
}

function PostData(req,res){
    
  try {
    const newPost = req.body;

    // console.log(newPost);
        if(
            !newPost["tweet_content"]["tweet_body"]["tweet_text"] ||
            newPost["tweet_content"]["tweet_body"]["tweet_text"].trim() == ""
        ){
            res.status(400).send("Tweet text can not be empty");
        }else if(
            newPost["tweet_content"]["tweet_body"]["tweet_text"].length <= 180
        ){
            let nouveautweet = [newPost, ...dataArr];
            dataArr = [...nouveautweet];
            res.send(dataArr);
        }else{
            res.status(400).send("Tweet text is too long (max 180 charactere)");
        }
    
  } catch (error) {

    console.error("Error creating new post:", error);
    res.status(500).send("Internal server Error");
    
  }  
    }

    export default PostData;