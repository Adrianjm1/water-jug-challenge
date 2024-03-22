export const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key;
    if (/^[a-zA-Z.,]$/.test(keyValue)) {
        event.preventDefault();
    }
};