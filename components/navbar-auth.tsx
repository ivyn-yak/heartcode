"use client";

import * as React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

export const NavbarAuth = () => {
  return (
    <div className="absolute right-0 p-4">
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <ModeToggle />
      </div>
    </div>
  );
};
