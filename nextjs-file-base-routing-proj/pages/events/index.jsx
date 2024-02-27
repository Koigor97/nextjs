import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy";

import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function handleFindEvent(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch handleFindEvent={handleFindEvent} />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
