import { data } from "../../data/dummyData";

export default function dynamicHandler(req, res) {
  const feedbackId = +req.query.feedbackId;
  console.log(req.query);

  const item = data.find((theData) => theData.id === feedbackId);
  console.log(item);
  res.status(200).json({
    status: "Success",
    data: item,
  });
}
