"use client";

import * as React from "react";
import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
  return (
    <div className="absolute right-0 p-4">
      <ModeToggle />
    </div>
  );
};
