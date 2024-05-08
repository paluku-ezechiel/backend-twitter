import { data } from "../data.js";

let dataArr = data[0].currentUser;

export function getcurrentUse(req, res) {
    try {
        res.status(200).json(dataArr);
    } catch (error) {
        res.status(500).json({message:error});
    }
}