import {handleClickSwitchPage} from "./NavigateUtils";

// Displays content for the selected section
export const handleClickEnterSection = (id, setSectionId, setSectionIsSelected, newSelectedSectionRef, selectedSectionRef, setSelectedSectionRef) => {
    setSectionId(id);
    setSectionIsSelected(true);
    if (selectedSectionRef && selectedSectionRef.current) {
        selectedSectionRef.current.style.backgroundColor = "black";
    }
    newSelectedSectionRef.current.style.backgroundColor = "darkslategray";
    setSelectedSectionRef(newSelectedSectionRef);
}

const noNullValues = (arrayOfProblems) => {
    for (let index = 0; index < arrayOfProblems.length; index++) {
        let currentId = arrayOfProblems[index].id;
        let currentAnswerLocalKey = "answer" + currentId;
        let currentPromptLocalKey = "prompt" + currentId;
        let locallyStoredAnswer = localStorage.getItem(currentAnswerLocalKey);
        let locallyStoredPrompt = localStorage.getItem(currentPromptLocalKey);
        if ((locallyStoredAnswer === null) || (locallyStoredAnswer === "") || (locallyStoredPrompt === null) || (locallyStoredPrompt === "")) {
            return false;
        }
    }

    return true;
}

// Transitions user to the test page and randomizes the questions asked
export const handleClickTest = (setNotEnoughProblems, setShowErrorMessage, arrayOfProblems, setArrayOfProblems, navigate, path) => {
    if (arrayOfProblems.length < 6) {
        setShowErrorMessage(true);
        setNotEnoughProblems(true)
    }
    else if (!(noNullValues(arrayOfProblems))) {
        setShowErrorMessage(true);
        setNotEnoughProblems(false);
    }
    else {
        handleShuffle(arrayOfProblems, setArrayOfProblems);
        handleClickSwitchPage(navigate, path);
    }
}

// Shuffles the elements in an array
export const handleShuffle = (array, setArray) => {
    let firstRandomIndex;
    let secondRandomIndex;
    let tempArray = [...array];
    let temp;

    for (let counter = 0; counter < array.length; counter++) {
        firstRandomIndex = Math.floor(Math.random() * array.length);
        secondRandomIndex = Math.floor(Math.random() * array.length);
        
        temp = tempArray[firstRandomIndex];
        tempArray[firstRandomIndex] = tempArray[secondRandomIndex];
        tempArray[secondRandomIndex] = temp;
    }

    setArray(tempArray);
}