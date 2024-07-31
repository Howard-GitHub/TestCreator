export const handleClickEnterSection = (id, setSectionId, setSectionIsSelected, newSelectedSectionRef, selectedSectionRef, setSelectedSectionRef) => {
    setSectionId(id);
    setSectionIsSelected(true);
    if (selectedSectionRef) {
        selectedSectionRef.current.style.backgroundColor = "black";
    }
    newSelectedSectionRef.current.style.backgroundColor = "darkslategray";
    setSelectedSectionRef(newSelectedSectionRef);
}