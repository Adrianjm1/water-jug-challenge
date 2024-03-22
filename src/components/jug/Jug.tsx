import React, { Dispatch, SetStateAction } from 'react';
import './jug.css'
import { handleKeyDown } from '../../utils/handleNumericInput';
interface JugProps {
    jug: string;
    jugValue: number;
    setJugValue: Dispatch<SetStateAction<number>>;
}
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {

    setter(Number(event.target.value));
};

const Jug: React.FC<JugProps> = ({ jug, jugValue, setJugValue }) => {
    return (
        <label className='jugLabel'>
            {jug}
            <input
                type="number"
                value={jugValue}
                onChange={(event) => handleInputChange(event, setJugValue)}
                min={1}
                onKeyDown={handleKeyDown}
            />
        </label>
    );
};

export default Jug;