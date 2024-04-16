import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getPublicEvents } from "@/functions/getPublicEvents";
import Link from "next/link";
import { CreateEvent } from "./createEvent";

export default async function Home() {
  const events = await getPublicEvents();

  return (
    <main className="px-4">
      <div className="flex justify-between items-center pb-6 px-2">
        <p className="text-lg font-medium">Events</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">New</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <CreateEvent />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-y-4">
        {events.map((event) => (
          <Link key={event.id} href={`/event/${event.id}`}>
            <div className="bg-neutral-100 px-6 py-4 rounded-lg hover:bg-neutral-200">
              {event.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
