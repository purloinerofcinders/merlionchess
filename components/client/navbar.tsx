"use client";

import { signinWithEmailSupabase } from "@/functions/signinWithEmailSupabase";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { getUser } from "@/functions/getUser";

export function NavBar() {
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    const response = await signinWithEmailSupabase(email);

    console.log(response);
  }

  async function get() {
    const user = await getUser();
  }

  return (
    <div className="flex flex-row p-6 justify-between items-center">
      <header>
        <h1 className="text-lg font-medium">MerlionChess</h1>
      </header>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex gap-x-2">
            <Button variant="link">Sign up</Button>
            <Button>Log in</Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <form className="flex flex-col p-6">
            <header className="text-left pb-8">
              <h1 className="text-2xl font-medium">Log in or Sign up</h1>
            </header>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              className="mb-4"
            ></Input>
            <Button formAction={handleSubmit}>Receive a Magic Link</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
