"use client";

import DrugQuiz from "@/components/quiz";

export default function QuizDemo() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <DrugQuiz />
      </div>
    </div>
  );
}
