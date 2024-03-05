import Head from "next/head";

import { getFeaturedEvents } from "../dummy";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

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
      <NewsletterRegistration />
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomPage;
