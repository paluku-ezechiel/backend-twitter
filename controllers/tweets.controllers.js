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
    const id = Math.floor(Math.random() * 100000).toString();
    const body ={id, ...req.body};
    dataArr.push(body);
    res.status(201).json(dataArr);
}

export default PostData;