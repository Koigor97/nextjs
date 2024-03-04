import Link from "next/link";
import { useState } from "react";

import { data } from "../../data/dummyData";

export default function FeedBackPage(props) {
  const { feedbackData } = props;
  const [isClicked, setIsClicked] = useState(null);
  const [theData, setTheData] = useState(null);

  async function handleFetchData(id) {
    setIsClicked(!false);
    const res = await fetch(`/api/${id}`);
    const data = await res.json();
    console.log(data);
    setTheData(data);
  }

  return (
    <>
      <ul>
        {feedbackData.map((data) => (
          <li key={data.id}>
            {`Title: ${data.title}`}{" "}
            <button onClick={handleFetchData.bind(null, data.id)}>
              {isClicked ? "hide details" : "view details"}
            </button>
            {isClicked && <FeedbackDetails item={theData} />}
          </li>
        ))}
      </ul>
      <Link href="/">Go back</Link>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      feedbackData: data,
    },
  };
}

function FeedbackDetails(item) {
  return (
    <div>
      <h3>Title: {item.title}</h3>
      <p>Description: {item.description} </p>
      <p>Assignee: {item.assignee}</p>
      <p>Priority: {item.priority}</p>
    </div>
  );
}
