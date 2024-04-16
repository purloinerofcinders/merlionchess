"use client";

import ConditionalRender from "@/app/conditionalRender";
import { signinWithEmail } from "@/functions/signinWithEmail";
import { Chess } from "@/svg/chess";
import { Tables } from "@/types/supabase";
import { SquareUserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";

type NavBarProps = {
  profiles: Tables<"profiles">[]
};

export function NavBar(props: NavBarProps) {
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    const success = await signinWithEmail(email);

    if (success) {
    }
  }

  return (
    <div className="flex flex-row p-6 justify-between items-center">
      <Link href="/">
        <div className="flex gap-x-2 items-center">
          <div className="w-6 h-auto">
            <Chess />
          </div>
          <header>
            <h1 className="text-lg font-medium">ChessInSG</h1>
          </header>
        </div>
      </Link>
      <ConditionalRender showWhen={props.profiles.length > 0}>
        <Button variant="ghost">
          <SquareUserRound size={24} />
        </Button>
      </ConditionalRender>
      <Dialog>
        <ConditionalRender showWhen={props.profiles.length === 0}>
          <DialogTrigger asChild>
            <div className="flex gap-x-2">
              <Button variant="link">Sign up</Button>
              <Button>Log in</Button>
            </div>
          </DialogTrigger>
        </ConditionalRender>
        <DialogContent>
          <form id="loginForm" className="flex flex-col p-6">
            <header className="text-left pb-8">
              <h1 className="text-2xl font-medium">Log in or Sign up</h1>
            </header>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              className="mb-4"
              required
            ></Input>
            <Button formAction={handleSubmit}>Receive a Magic Link</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
