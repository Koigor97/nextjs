import Head from "next/head";

import { getFeaturedEvents } from "../dummy";
import EventList from "../components/events/event-list";

function HomPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta
          name="description"
          content="Find your next event meet people and make friends."
        />
      </Head>

      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomPage;
