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

// Transitions user to the test page and randomizes the questions asked
export const handleClickTest = (setShowErrorMessage, arrayOfProblems, setArrayOfProblems, navigate, path) => {
    if (arrayOfProblems.length < 6) {
        setShowErrorMessage(true);
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