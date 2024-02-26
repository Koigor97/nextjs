import { getFeaturedEvents } from "../dummy";
import EventList from "../components/events/event-list";

function HomPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>

      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomPage;
