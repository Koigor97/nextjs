import Link from "next/link";
import styles from "./event-item.module.css";

import Button from "../shared/button";

function EventItem({ event }) {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-SA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = event.location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={`/${event.image}`} alt={`Photo of ${event.title} event`} />
      <div className={styles.content}>
        <h2>{event.title}</h2>
        <div className={styles.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={styles.actions}>
        <Button link={`/events/${event.id}`}>Explore Event</Button>
      </div>
    </li>
  );
}

export default EventItem;
