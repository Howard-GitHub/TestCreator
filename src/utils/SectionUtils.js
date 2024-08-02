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
export const handleClickShuffle = (arrayOfProblems, setArrayOfProblems) => {
    let firstRandomIndex;
    let secondRandomIndex;
    let tempArray = [...arrayOfProblems];
    let temp;

    for (let counter = 0; counter < arrayOfProblems.length; counter++) {
        firstRandomIndex = Math.round(Math.random() * arrayOfProblems.length);
        secondRandomIndex = Math.round(Math.random() * arrayOfProblems.length);
        
        temp = tempArray[firstRandomIndex];
        tempArray[firstRandomIndex] = tempArray[secondRandomIndex];
        tempArray[secondRandomIndex] = temp;
    }

    setArrayOfProblems(tempArray);
}