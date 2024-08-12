// Transitions to the next problem
export const handleClickNextProblem = (index, setIndex, setUserInput, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems) => {
    setIndex(index + 1);
    setUserInput("");
    setCheckButtonIsClicked(false);
    setNumCompletedProblems(numCompletedProblems + 1);
}

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