// Transitions to the next problem
export const handleClickNextProblem = (index, setIndex, setUserInput, setCheckButtonIsClicked) => {
    setIndex(index + 1);
    setUserInput("");
    setCheckButtonIsClicked(false);
}