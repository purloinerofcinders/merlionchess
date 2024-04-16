"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { insertEvent } from "@/functions/insertEvent";
import { format } from "date-fns";
import { useState } from "react";

export function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventIsPrivate, setEventIsPrivate] = useState(false);

  async function createNow() {
    console.log (format(new Date, "dd/MM/yyyy HH:mm").toString());
    const event = {
      name: eventName,
      private: eventIsPrivate,
      start_date: format(new Date, "yyyy/MM/dd HH:mm"),
      end_date: format(new Date, "yyyy/MM/dd HH:mm")
    }

    const response = await insertEvent(event);

    console.log(response);
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Create a new event</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <form id="createEventForm">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="eventName"
              placeholder="Event name"
              className="col-span-3"
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="eventStatus"
                checked={eventIsPrivate}
                onCheckedChange={(checked) => {
                  setEventIsPrivate(checked as boolean);
                }}
              />
              <label
                htmlFor="eventStatus"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Private event
              </label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" formAction={createNow}>Create event</Button>
        </DialogFooter>
      </form>
    </>
  );
}
