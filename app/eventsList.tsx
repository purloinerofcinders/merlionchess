"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { CreateEventForm } from "./createEventForm";
import { Tables } from "@/types/supabase";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ConditionalRender from "./conditionalRender";

type EventsListProps = {
  events: Tables<"events">[];
  myEvents: Tables<"events">[];
};

type EventsFilterType = "Events" | "MyEvents";

export function EventsList(props: EventsListProps) {
  const [eventsFilter, setEventsFilter] = useState<EventsFilterType>("Events");

  return (
    <>
      <div className="flex justify-between items-center pb-6 px-2">
        <div className="flex flex-row">
          <Button variant="skeleton" onClick={() => setEventsFilter("Events")}>
            <p
              className={cn(
                "text-lg font-medium",
                eventsFilter === "MyEvents" ? "text-neutral-400" : "text-black"
              )}
            >
              Events
            </p>
          </Button>
          <Button
            variant="skeleton"
            onClick={() => setEventsFilter("MyEvents")}
            className={
              eventsFilter === "Events" ? "text-neutral-400" : "text-black"
            }
          >
            <p
              className={cn(
                "text-lg font-medium",
                eventsFilter === "Events" ? "text-neutral-400" : "text-black"
              )}
            >
              My Events
            </p>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">New</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <CreateEventForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-y-4 pb-24">
        <ConditionalRender showWhen={eventsFilter === "Events"}>
          {props.events.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <div className="px-6 py-4 rounded-lg hover:bg-neutral-100">
                {event.name}
              </div>
            </Link>
          ))}
        </ConditionalRender>

        <ConditionalRender showWhen={eventsFilter === "MyEvents"}>
          {props.myEvents.map((myEvent) => (
            <Link key={myEvent.id} href={`/event/${myEvent.id}`}>
              <div className="px-6 py-4 rounded-lg hover:bg-neutral-100">
                {myEvent.name}
              </div>
            </Link>
          ))}
        </ConditionalRender>
      </div>
    </>
  );
}
