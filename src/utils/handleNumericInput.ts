/**
 * This function handles the key down event for an input element.
 * It prevents the default action if the key pressed is a letter (either lowercase or uppercase), a comma, or a period.
 *
 * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyboard event triggered by user input.
 */
export const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Get the key value from the event
    const keyValue = event.key;
    // Test if the key value is a letter (either lowercase or uppercase), a comma, or a period
    if (/^[a-zA-Z.,]$/.test(keyValue)) {
        // If it is, prevent the default action (which is inputting the character)
        event.preventDefault();
    }
};