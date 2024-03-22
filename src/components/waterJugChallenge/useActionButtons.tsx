import { useState } from 'react';
import { toast } from 'react-toastify';
import { Step } from '../../interfaces/WaterJugChallengeTypes';
import solveWaterJugChallenge from '../../utils/solveWaterJugChallenge';

export const useWaterJugChallenge = () => {
    const [jugX, setJugX] = useState(0);
    const [jugY, setJugY] = useState(0);
    const [goal, setGoal] = useState(0);
    const [steps, setSteps] = useState<Step[]>([]);

    const handleStart = () => {
        const solution = solveWaterJugChallenge(jugX, jugY, goal);
        if (solution !== "No solution") {
            setSteps(solution);
            toast.success('Here is the solution!')
        } else {
            toast.error("No solution");
        }
    };

    const handleClean = () => {
        setJugX(2);
        setJugY(100);
        setGoal(96);
        setSteps([]);
        toast.success('Successfully cleaned!')
    }

    return {
        jugX, setJugX,
        jugY, setJugY,
        goal, setGoal,
        steps, setSteps,
        handleStart,
        handleClean
    };
};