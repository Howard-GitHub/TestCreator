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