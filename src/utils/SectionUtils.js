
// Displays content for the selected section
export const handleClickEnterSection = (id, setSectionId, setSectionIsSelected, newSelectedSectionRef, selectedSectionRef, setSelectedSectionRef) => {
    setSectionId(id);
    setSectionIsSelected(true);
    if (selectedSectionRef) {
        selectedSectionRef.current.style.backgroundColor = "black";
    }
    newSelectedSectionRef.current.style.backgroundColor = "darkslategray";
    setSelectedSectionRef(newSelectedSectionRef);
}

// Shuffles the elements in an array
export const handleClickShuffle = (arrayOfProblems, setArrayOfProblems, navigate, path) => {
    let firstRandomIndex;
    let secondRandomIndex;
    let tempArray = [...arrayOfProblems];
    let temp;

    for (let counter = 0; counter < arrayOfProblems.length; counter++) {
        firstRandomIndex = Math.floor(Math.random() * arrayOfProblems.length);
        secondRandomIndex = Math.floor(Math.random() * arrayOfProblems.length);
        
        temp = tempArray[firstRandomIndex];
        tempArray[firstRandomIndex] = tempArray[secondRandomIndex];
        tempArray[secondRandomIndex] = temp;
    }

    setArrayOfProblems(tempArray);
    handleClickSwitchPage(navigate, path);
}

// Transitions to a different page
export const handleClickSwitchPage = (navigate, path) => {
    navigate(path);
}