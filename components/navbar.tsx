"use client";

import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes"; // Optional for theme toggle

export const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <div className="absolute right-0 p-4">
      <ModeToggle />
    </div>
  );
};
