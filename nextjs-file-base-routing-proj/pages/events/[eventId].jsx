import Head from "next/head";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const { title, description, location, date, image } = getEventById(eventId);

  if (!eventId) {
    return (
      <ErrorAlert>
        <p>No event detail</p>;
      </ErrorAlert>
    );
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        location={location}
        image={image}
        imageAlt={`Photo of ${title} event`}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
