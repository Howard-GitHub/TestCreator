// Transitions to the next problem
export const handleClickNextProblem = (index, setIndex, setUserInput, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems) => {
    setIndex(index + 1);
    setUserInput("");
    setCheckButtonIsClicked(false);
    setNumCompletedProblems(numCompletedProblems + 1);
}