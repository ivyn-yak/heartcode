"use client";

import { NavbarAuth } from "@/components/navbar-auth";
import { Landing } from "@/components/landing";
import QuizButton from '@/components/quiz-button';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/quiz');
    };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <NavbarAuth />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Landing />
        <div className="mt-8">
            <QuizButton/>
        </div>
      </div>
    </div>
  );
}
