"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { insertEvent } from "@/functions/insertEvent";
import { cn } from "@/lib/utils";
import { format, setDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export function CreateEventForm() {
  const [eventName, setEventName] = useState("");
  const [eventIsPrivate, setEventIsPrivate] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(new Date());

  async function createNow() {
    console.log(format(new Date(), "dd/MM/yyyy HH:mm").toString());
    const event = {
      name: eventName,
      private: eventIsPrivate,
      start_date: format(new Date(), "yyyy/MM/dd HH:mm"),
      end_date: format(new Date(), "yyyy/MM/dd HH:mm"),
    };

    const response = await insertEvent(event);

    console.log(response);
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Create a new event</DialogTitle>
        <DialogDescription>
          We need some details to create a new event for you.
        </DialogDescription>
      </DialogHeader>
      <form id="createEventForm">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Input
              id="eventName"
              placeholder="Event name"
              className="w-full"
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
              required
              autoComplete="off"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Pick the start date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="range"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
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
        <div className="pt-4">
          <DialogFooter>
            <Button type="submit" formAction={createNow}>
              Create event
            </Button>
          </DialogFooter>
        </div>
      </form>
    </>
  );
}
