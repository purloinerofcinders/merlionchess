"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { insertProfile } from "@/functions/insertProfile";
import { redirect } from "next/navigation";
import { useState } from "react";

export function CreateProfile() {
  const [name, setName] = useState("");
  const [elo, setElo] = useState("");

  async function createProfile() {
    const profile = {
      name: name
    }

    const success = await insertProfile(profile);

    if (success) {
      redirect('/');
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 animate-in fade-in-0">
      <div className="flex w-full h-full justify-center items-center">
        <div className="bg-white sm:rounded-lg p-8">
          <form id="createInitialProfileForm">
            <div>
              <header>
                <h1 className="text-2xl font-semibold">Welcome!</h1>
              </header>
              <p className="">
                We just need your name to get things started. All else are
                optional.
              </p>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  id="name"
                  placeholder="Name*"
                  className="col-span-4"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  id="elo"
                  placeholder="Elo rating"
                  className="col-span-4"
                  type="number"
                  value={elo}
                  onChange={(event) => setElo(event.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <Button type="submit" formAction={createProfile}>
                Create profile
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
