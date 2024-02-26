import EventItem from "./event-item";
import styles from "./event-list.module.css";

function EventList({ events }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </ul>
  );
}

export default EventList;
