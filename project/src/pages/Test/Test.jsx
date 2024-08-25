import {useEffect, useRef, useState} from 'react';
import './Test.css';
import TypingProblem from '../../components/TypingProblem/TypingProblem';
import ReturnToDashboardButton from '../../components/ReturnToDashboardButton/ReturnToDashboardButton';
import NumCompletedProblems from '../../components/NumCompletedProblems/NumCompletedProblems';
import MultipleChoice from '../../components/MultipleChoice/MultipleChoice';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';

const Test = ({arrayOfProblems, setArrayOfProblems, numOfCorrect, setNumOfCorrect, setSectionId, setSectionIsSelected}) => {
    const [index, setIndex] = useState(0);
    const [problem, setProblem] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [checkButtonIsClicked, setCheckButtonIsClicked] = useState(false);
    const [numCompletedProblems, setNumCompletedProblems] = useState(0);
    const [isTypingProblem, setIsTypingProblem] = useState(null);
    const testFormatRef = useRef(null);
    const {} = useLocalStoredArray("test", arrayOfProblems, setArrayOfProblems);

    // Keeps the user on the same problem prompt if the user refreshes the screen
    useEffect(() => {
        const locallyStoredIndex = localStorage.getItem("index");
        const locallyStoredNumCompleted = localStorage.getItem("numOfCompleted");
        const locallyStoredNumCorrect = localStorage.getItem("numOfCorrect");
        const locallyStoredCheckIsClicked = localStorage.getItem("checkIsClicked");

        if ((locallyStoredIndex !== null) && (locallyStoredNumCompleted !== null) && (locallyStoredNumCorrect !== null) && (locallyStoredCheckIsClicked !== null) && (arrayOfProblems !== null)) {
            const clickedCheck = JSON.parse(locallyStoredCheckIsClicked);
            const currentIndex = JSON.parse(locallyStoredIndex);
            const numCorrectlyAnswered = JSON.parse(locallyStoredNumCorrect)
            setIndex(currentIndex);
            setProblem(arrayOfProblems[currentIndex]);
            setNumCompletedProblems(currentIndex);
            if (clickedCheck) {
                setNumOfCorrect(numCorrectlyAnswered - 1);
            }
            else {
                setNumOfCorrect(numCorrectlyAnswered);
            }
        }
    }, [arrayOfProblems])

    // Sets the problem to the first problem in the array when the user first enters the test page
    useEffect(() => {
        if (arrayOfProblems !== null) {
            setProblem(arrayOfProblems[index]);
            localStorage.setItem("index", JSON.stringify(index));
            localStorage.setItem("numOfCompleted", JSON.stringify(index));
        }
    }, [index, arrayOfProblems])

    useEffect(() => {
        if (numOfCorrect !== null) {
            localStorage.setItem("numOfCorrect", JSON.stringify(numOfCorrect));
        }
    }, [numOfCorrect])

    // Randomly decides if the question is fill in the blank or multiple choice
    useEffect(() => {
        let random = Math.floor(Math.random() * 2);
        if (random === 0) {
            setIsTypingProblem(true);
        }
        else {
            setIsTypingProblem(false);
        }
    }, [problem])


    return (  
        <div className="test-container">
            <div className="test">
                <div 
                    ref={testFormatRef}
                    className="test__format">
                    {(isTypingProblem !== null) && 
                        (isTypingProblem) ? (
                            ((problem !== null) && (arrayOfProblems !== null)) && (
                            <TypingProblem
                                problemId={problem.id}
                                index={index}
                                setIndex={setIndex}
                                checkButtonIsClicked={checkButtonIsClicked}
                                setCheckButtonIsClicked={setCheckButtonIsClicked}
                                isCorrect={isCorrect}
                                setIsCorrect={setIsCorrect}
                                numCompletedProblems={numCompletedProblems}
                                setNumCompletedProblems={setNumCompletedProblems}
                                numOfProblems={arrayOfProblems.length}
                                numOfCorrect={numOfCorrect}
                                setNumOfCorrect={setNumOfCorrect}
                            />
                            )
                        ) : (
                            ((problem !== null) && (arrayOfProblems !== null)) && (
                            <MultipleChoice
                                problemId={problem.id}
                                index={index}
                                setIndex={setIndex}
                                checkButtonIsClicked={checkButtonIsClicked}
                                setCheckButtonIsClicked={setCheckButtonIsClicked}
                                isCorrect={isCorrect}
                                setIsCorrect={setIsCorrect}
                                numCompletedProblems={numCompletedProblems}
                                setNumCompletedProblems={setNumCompletedProblems}
                                numOfProblems={arrayOfProblems.length}
                                numOfCorrect={numOfCorrect}
                                setNumOfCorrect={setNumOfCorrect}
                                arrayOfProblems={arrayOfProblems}
                            />
                        )
                    )}
                    </div>
                <ReturnToDashboardButton
                    type={"test"}
                    setNumOfCorrect={setNumOfCorrect}
                    setSectionId={setSectionId}
                    setArrayOfProblems={setArrayOfProblems}
                    setSectionIsSelected={setSectionIsSelected}
                />
                {(arrayOfProblems !== null) && (
                    <NumCompletedProblems
                        numCompletedProblems={numCompletedProblems}
                        numOfProblems={arrayOfProblems.length}
                    />
                )}
            </div>
        </div>
    );
}
 
export default Test;