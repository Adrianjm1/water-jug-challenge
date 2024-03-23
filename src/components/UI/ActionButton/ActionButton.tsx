
interface ActionButton {
    label: string
    onClick: () => void
    backgroundColor: string
    disabled?: boolean;
}

export const ActionButton = ({ label, onClick, backgroundColor, disabled }: ActionButton) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: backgroundColor }} disabled={disabled}>{label}</button>
    )
}
