// Transitions to the next problem
export const handleClickNextProblem = (index, setIndex, setCheckButtonIsClicked) => {
    setIndex(index + 1);
    setCheckButtonIsClicked(false);
}