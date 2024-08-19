import {useEffect, useRef, useState} from 'react';
import './Test.css';
import FillInTheBlank from '../components/FillInTheBlank/FillInTheBlank';
import ReturnToDashboardButton from '../components/ReturnToDashboardButton/ReturnToDashboardButton';
import NumCompletedProblems from '../components/NumCompletedProblems/NumCompletedProblems';
import MultipleChoice from '../components/MultipleChoice/MultipleChoice';

const Test = ({arrayOfProblems, numOfCorrect, setNumOfCorrect}) => {
    const [index, setIndex] = useState(0);
    const [problem, setProblem] = useState(arrayOfProblems[0]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [checkButtonIsClicked, setCheckButtonIsClicked] = useState(false);
    const [numCompletedProblems, setNumCompletedProblems] = useState(0);
    const [isFillInTheBlank, setIsFillInTheBlank] = useState(null);
    const testFormatRef = useRef(null);

    // Resets test statistics
    useEffect(() => {
        setNumCompletedProblems(0);
        setNumOfCorrect(0);
    }, [])

    // Sets the problem to the first problem in the array when the user first enters the test page
    useEffect(() => {
        setProblem(arrayOfProblems[index]);
    }, [index])

    // Randomly decides if the question is fill in the blank or multiple choice
    useEffect(() => {
        let random = Math.floor(Math.random() * 2);
        if (random === 0) {
            setIsFillInTheBlank(true);
        }
        else {
            setIsFillInTheBlank(false);
        }
    }, [problem])


    return (  
        <div className="test-container">
            <div className="test">
                <div 
                    ref={testFormatRef}
                    className="test__format">
                    {(isFillInTheBlank !== null) && 
                        (isFillInTheBlank) ? (
                            <FillInTheBlank
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
                        ) : (
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
                        )}
                    </div>
                <ReturnToDashboardButton
                    type={"test"}
                />
                <NumCompletedProblems
                    numCompletedProblems={numCompletedProblems}
                    numOfProblems={arrayOfProblems.length}
                />
            </div>
        </div>
    );
}
 
export default Test;