import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const QuizButton: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/quiz');
    };

    return (
        <Button onClick={handleClick}>
            Take Quiz
        </Button>
    );
};

export default QuizButton;