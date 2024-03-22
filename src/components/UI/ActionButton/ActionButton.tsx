
interface ActionButton {
    label: string
    onClick: () => void
    backgroundColor: string
    disabled?: boolean; // Agrega esta línea
}

export const ActionButton = ({ label, onClick, backgroundColor, disabled }: ActionButton) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: backgroundColor }} disabled={disabled}>{label}</button>
    )
}
