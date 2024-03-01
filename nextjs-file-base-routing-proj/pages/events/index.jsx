import Head from "next/head";
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
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="See all available events and filter events by date"
        />
      </Head>
      <EventSearch handleFindEvent={handleFindEvent} />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
