"use client";

import DrugQuiz from "@/components/quiz";
import { NavbarAuth } from "@/components/navbar-auth";
import { useUser } from "@clerk/clerk-react";
import { Landing } from "@/components/landing";

export default function QuizDemo() {
  const { isSignedIn } = useUser();
  if (!isSignedIn) {
    return (
      <div>
        <NavbarAuth />
        <Landing />
      </div>
    );
  }

  return (
    <div>
      <NavbarAuth />
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <DrugQuiz />
        </div>
      </div>
    </div>
  );
}
