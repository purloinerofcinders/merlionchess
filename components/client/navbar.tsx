import Link from "next/link";
import { Button } from "../ui/button";

export function NavBar() {
  return (
    <div className="flex flex-row p-6 justify-between items-center">
      <header>
        <h1 className="text-lg font-medium">MerlionChess</h1>
      </header>
      <div className="flex gap-x-2">
        <Button variant="link">Sign up</Button>
        <Button>Log in</Button>
      </div>
    </div>
  );
}
