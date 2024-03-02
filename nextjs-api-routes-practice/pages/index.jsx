import { useRef } from "react";

function HomePage() {
  const emailInput = useRef();
  const feedBackInput = useRef();

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
    </div>
  );
}

export default HomePage;
