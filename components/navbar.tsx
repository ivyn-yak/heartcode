"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes"; // Optional for theme toggle

export const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="w-full py-4 px-8 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-200">
            MyApp
          </Link>
        </div>
        <div>
        <ModeToggle/>
        </div>
      </div>
    </nav>
  );
};
