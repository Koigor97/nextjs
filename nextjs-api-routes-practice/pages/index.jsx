import { useRef, useState } from "react";

function HomePage() {
  const emailInput = useRef();
  const feedBackInput = useRef();
  const [feebackData, setFeedbackData] = useState([]);

  function handleFormSubmission(e) {
    e.preventDefault();
    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedBackInput.current.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };

    // connecting the frontend to the backend
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function handleLoadFeedbacks() {
    async function fetchData() {
      const res = await fetch("/api/feedback");
      const { data } = await res.json();
      setFeedbackData(data);
    }

    fetchData();
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleFormSubmission}>
        <div>
          <label htmlFor="email">Your Email address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedBackInput} />
        </div>
        <button>Send feedback</button>
      </form>

      <hr />

      <button onClick={handleLoadFeedbacks}>Load Feedback</button>

      <ul>
        {feebackData.map((data) => (
          <li
            key={data.id}
          >{`Title: ${data.title}, Description: ${data.description}, Assignee: ${data.assignee}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
