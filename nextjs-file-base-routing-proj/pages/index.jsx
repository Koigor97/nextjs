import { getFeaturedEvents } from "../dummy";
import EventList from "../components/events/event-list";

function HomPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomPage;
