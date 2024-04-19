import { getPublicEvents } from "@/functions/getPublicEvents";
import { EventsList } from "./eventsList";
import { getOwnedEvents } from "@/functions/getOwnedEvents";
import { getUser } from "@/functions/getUser";

export default async function Home() {
  const user = await getUser();

  const events = (await getPublicEvents(user?.id)).toSorted((a, b) => {
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  });
  
  const myEvents = user ? (await getOwnedEvents(user.id)).toSorted((a, b) => {
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  }) : [];

  return (
    <main className="px-4">
      <EventsList events={events} myEvents={myEvents} />
    </main>
  );
}
