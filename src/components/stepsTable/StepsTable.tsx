import { StepsTableProps } from "../../interfaces/WaterJugChallengeTypes"
import './stepTable.css'
import { motion } from "framer-motion"

export const StepsTable = ({ steps }: StepsTableProps) => {
    return (
        <>
            {steps.length > 0 &&
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <table>
                        <thead>
                            <tr>
                                <th data-label="Jug X">Jug X</th>
                                <th data-label="Jug Y">Jug Y</th>
                                <th data-label="Explanation">Explanation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {steps.map((step, index) => (
                                <tr key={index}>
                                    <td data-label="Jug X">{step.jugX}</td>
                                    <td data-label="Jug Y">{step.jugY}</td>
                                    <td data-label="Explanation">{step.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            }
        </>
    )
}