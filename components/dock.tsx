"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHeartHandshake,
  IconHome,
  IconUserFilled,
} from "@tabler/icons-react";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About Me",
      icon: (
        <IconUserFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about-me",
    },
    {
      title: "Heartcode Quiz",
      icon: (
        <IconHeartHandshake className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/quiz",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ivyn-yak",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[10rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-10" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
