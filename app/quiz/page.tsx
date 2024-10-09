"use client";

import DrugQuiz from "@/components/quiz";
import { NavbarAuth } from "@/components/navbar-auth";
import { useUser } from "@clerk/clerk-react";

export default function QuizDemo() {
  const { isSignedIn } = useUser();
  if (!isSignedIn) {
    return (
      <div>
        <NavbarAuth />
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center">
              Substance Abuse Quiz
            </h1>
            <div className="flex">
              <p>
                Test your knowledge of substance abuse.{" "}
                <span className="font-bold">Sign in</span> to see how well you
                understand these topics!
              </p>
            </div>
          </div>
        </div>
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
