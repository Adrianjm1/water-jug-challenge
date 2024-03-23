import React from 'react';
import Jug from '../jug/Jug';
import { StepsTable } from '../stepsTable/StepsTable';
import { ActionButtons } from './ActionButtons';
import { useWaterJugChallenge } from './useActionButtons';



const WaterJugChallenge: React.FC = () => {
    const { jugX, setJugX, jugY, setJugY, goal, setGoal, steps, handleStart, handleClean } = useWaterJugChallenge();

    const jugArray = [
        { jug: 'Bucket X', value: jugX, setter: setJugX },
        { jug: 'Bucket Y', value: jugY, setter: setJugY },
        { jug: 'Amount wanted Z', value: goal, setter: setGoal },
    ];

    return (
        <div>
            {jugArray.map((jugObj, index) =>
                <Jug key={index} jug={jugObj.jug} jugValue={jugObj.value} setJugValue={jugObj.setter} />
            )}
            <ActionButtons onClean={handleClean} onStart={handleStart} steps={steps} />
            <StepsTable steps={steps} />
        </div>

    );
};

export default WaterJugChallenge;