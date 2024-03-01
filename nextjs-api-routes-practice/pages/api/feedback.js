import { data } from "../../data/dummyData";

function handler(req, res) {
  res.status(200).json({
    status: "Success",
    data,
  });
}

export default handler;
