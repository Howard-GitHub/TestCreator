// Transitions to the next problem
export const handleClickNextProblem = (index, setIndex, setUserAnswer, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems) => {
    setIndex(index + 1);
    setUserAnswer("");
    setCheckButtonIsClicked(false);
    setNumCompletedProblems(numCompletedProblems + 1);
}

// Checks if the user's answer is correct
export const handleClickCheck = (userInput, answer, setIsCorrect, numOfCorrect, setNumOfCorrect, setCheckButtonIsClicked) => {
    if (userInput === answer) {
        setIsCorrect(true);
        setNumOfCorrect(numOfCorrect + 1);
    }
    else {
        setIsCorrect(false);
    }
    setCheckButtonIsClicked(true);
}

export const handleClickChoice = (event, choiceRef, selectedChoiceRef, setSelectedChoiceRef, setChosenAnswer, option, checkButtonIsClicked) => {
    if (checkButtonIsClicked) {
        event.preventDefault();
    }
    else {
        const previousChoiceRef = selectedChoiceRef;
        if (previousChoiceRef) {
            previousChoiceRef.current.style.backgroundColor = "rgb(18, 18, 18)";
            previousChoiceRef.current.style.border = "1px solid darkslategray";
        }
        choiceRef.current.style.backgroundColor = "black";
        choiceRef.current.style.border = "3px solid darkslategray";
        setSelectedChoiceRef(choiceRef);
        setChosenAnswer(option);
    }
}