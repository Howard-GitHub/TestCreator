// Updates the value of the argument passed
export const handleChangeTestAnswerInput = (event, setUserInput) =>{
    setUserInput(event.target.value);
}

// Prevents the user from going down one line when pressing enter
export const handleKeyDownEnter = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
}