import { useRef, useState } from "react";

import styles from "./newsletter-registration.module.css";
import { isEmailValid } from "../../utils/validation";

function NewsletterRegistration() {
  const emailReference = useRef(null);
  const [isError, setIsError] = useState("");

  async function registrationHandler(e) {
    e.preventDefault();

    // fetch user input (state or refs)
    const enteredEmail = emailReference.current.value;
    console.log(enteredEmail);
    // optional: validate input
    if (isEmailValid(enteredEmail)) {
      // send valid data to API
      const status = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          thePath: "newsletter.json",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const statusData = await status.json();
      if (statusData.status === "Success") {
        setIsError(false);
      }
      // console.log(statusData);
    } else {
      setIsError(true);
    }
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailReference}
          />
          <button>Register</button>
        </div>
        {isError === false ? (
          <p>You are successfully registered</p>
        ) : (
          <p>Enter a valid email</p>
        )}
      </form>
    </section>
  );
}

export default NewsletterRegistration;
