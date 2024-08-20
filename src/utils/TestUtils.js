import {handleClickSwitchPage} from "./NavigateUtils";

// Transitions to the next problem
export const handleClickNextProblem = (index, setIndex, setUserAnswer, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems) => {
    setIndex(index + 1);
    setUserAnswer("");
    setCheckButtonIsClicked(false);
    setNumCompletedProblems(numCompletedProblems + 1);
    localStorage.setItem("checkIsClicked", JSON.stringify(false));
}

// Checks if the user's answer is correct
export const handleClickCheck = (userInput, answer, setIsCorrect, numOfCorrect, setNumOfCorrect, setCheckButtonIsClicked) => {
    if (userInput === answer) {
        setIsCorrect(true);
        setNumOfCorrect(numOfCorrect + 1);
        localStorage.setItem("checkIsClicked", JSON.stringify(true));
    }
    else {
        setIsCorrect(false);
    }
    setCheckButtonIsClicked(true);
}

// Selects the choice the user clicks on, unless the check button has been clicked
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

export const handleClickReturnToDashboard = (navigate, path, setNumOfCorrect) => {
    handleClickSwitchPage(navigate, path);
    localStorage.removeItem("index");
    localStorage.removeItem("numOfCompleted");
    localStorage.removeItem("numOfCorrect");
    localStorage.removeItem("checkIsClicked");
    localStorage.removeItem("test");
    setNumOfCorrect(0);
}