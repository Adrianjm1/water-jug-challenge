export const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key;
    if (!/^\d+$/.test(keyValue) && keyValue !== 'Backspace' && keyValue !== 'Delete' && !['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'].includes(keyValue)) {
        event.preventDefault();
    }
};
