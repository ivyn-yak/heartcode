import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuizProps {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface QuizComponentProps extends QuizProps {
  onNextQuestion: () => void;
}

const Quiz: React.FC<QuizComponentProps> = ({
  question,
  answers,
  correctAnswer,
  onNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(
    null
  );
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {answers &&
            answers.map((answer, index) => (
              <Button
                key={index}
                variant={
                  selectedAnswer === answer
                    ? isCorrect
                      ? "default"
                      : "destructive"
                    : "outline"
                }
                className="w-full justify-start text-left"
                onClick={() => handleAnswer(answer)}
                disabled={selectedAnswer !== null}
              >
                {answer}
              </Button>
            ))}
        </div>
        {isCorrect !== null && (
          <div className="mt-4">
            <p
              className={`font-semibold ${
                isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              {isCorrect
                ? "Correct!"
                : `Incorrect. The correct answer is: ${correctAnswer}`}
            </p>
            <Button onClick={onNextQuestion} className="mt-4">
              Next Question
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function WebDevQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [quizCompleted, setQuizCompleted] = React.useState(false);

  const quizQuestions: QuizProps[] = [
    {
      question:
        "What does caffeine actually do when you drink your 5th cup of coffee during a Monday morning meeting?",
      answers: [
        "Gives you superhuman strength to tackle that to-do list.",
        "Makes you speak at 1.5x speed like a podcast on fast-forward.",
        "Temporarily makes you forget you're running purely on anxiety.",
        "Makes your inner monologue sound like an auctioneer on Red Bull.",
      ],
      correctAnswer:
        "Makes you speak at 1.5x speed like a podcast on fast-forward.",
    },
    {
      question:
        "What's the most scientifically accurate description of the effect of aspirin?",
      answers: [
        "It's like a tiny team of pain-fighting ninjas punching your headache into submission.",
        "It whispers gently to your pain,'Shhh, everything's going to be alright.'",
        "It confuses your headache until it gives up and leaves.",
        "It's a magical cure from the gods of CVS.",
      ],
      correctAnswer:
        "It's like a tiny team of pain-fighting ninjas punching your headache into submission.",
    },
    {
      question: "Ibuprofen is best known for:",
      answers: [
        "Turning you into a completely pain-free superhero for at least 4 hours.",
        "Its ability to make you feel like you're 21 again (until it wears off).",
        "Winning the 'Best Supporting Actor' award for playing a role in every post-gym recovery story.",
        "Quietly judging you for doing whatever caused your back pain in the first place.",
      ],
      correctAnswer:
        "Quietly judging you for doing whatever caused your back pain in the first place.",
    },
    {
      question:
        "Which of the following is the most accurate slogan for cold medicine?",
      answers: [
        "Take this and you’ll hibernate for a solid 8 hours!",
        "Now with 200% more regret for every bad life decision you've ever made.",
        "Warning: May cause you to believe your couch is a viable home for the next 72 hours.",
        "For when you want to be half-asleep at work and still get paid.",
      ],
      correctAnswer:
        "Warning: May cause you to believe your couch is a viable home for the next 72 hours.",
    },
    {
      question: "Antihistamines are:",
      answers: [
        "The reason you can survive spring without sneezing your face off.",
        "Just tiny little warriors fighting the pollen apocalypse.",
        "Nature's way of saying, 'You can enjoy flowers without crying!'",
        "Making you drowsy so you don’t realize how much pollen is actually winning the war.",
      ],
      correctAnswer:
        "Making you drowsy so you don’t realize how much pollen is actually winning the war.",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {!quizCompleted ? (
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Substance Abuse Quiz
          </h1>
          <p className="mb-6 text-center text-muted-foreground">
            Test your knowledge of substance abuse. Let's see how well you
            understand these topics!
          </p>
          <p className="mb-4 text-center">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </p>
          <Quiz
            key={currentQuestionIndex}
            {...quizQuestions[currentQuestionIndex]}
            onNextQuestion={handleNextQuestion}
          />
        </div>
      ) : (
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Congratulations! You've completed the Substance Abuse Quiz!</h2>
          <p className="mb-4">
            Don't do drugs bro 👊
          </p>
          <Button onClick={restartQuiz}>Restart Quiz</Button>
        </div>
      )}
    </div>
  );
}
