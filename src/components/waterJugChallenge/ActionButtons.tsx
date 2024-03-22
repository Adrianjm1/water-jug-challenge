import { Step } from "../../interfaces/WaterJugChallengeTypes";
import { ActionButton } from "../UI/ActionButton/ActionButton";

interface ActionButtonsProps {
    onClean: () => void;
    onStart: () => void;
    steps: Step[];
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onClean, onStart, steps }) => {
    return (
        <div style={{ display: 'flex', justifyContent: ' center', gap: 10, margin: '30px 0px' }}>
            <ActionButton label="Iniciar" onClick={onStart} backgroundColor="" disabled={steps.length > 0} />
            <ActionButton label="Clean" onClick={onClean} backgroundColor="#B22222" disabled={!steps.length} />
        </div>
    );
};