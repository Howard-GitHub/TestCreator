import {useEffect, useState} from 'react';
import './Test.css';
import FillInTheBlank from '../components/FillInTheBlank/FillInTheBlank';
import ReturnToDashboardButton from '../components/ReturnToDashboardButton/ReturnToDashboardButton';
import CorrectScreen from '../components/CorrectScreen/CorrectScreen';
import IncorrectScreen from '../components/IncorrectScreen/IncorrectScreen';
import NeutralScreen from '../components/NeutralScreen/NeutralScreen';
import NumCompletedProblems from '../components/NumCompletedProblems/NumCompletedProblems';
import MultipleChoice from '../components/MultipleChoice/MultipleChoice';

const Test = ({arrayOfProblems, numOfCorrect, setNumOfCorrect}) => {
    const [index, setIndex] = useState(0);
    const [problem, setProblem] = useState(arrayOfProblems[0]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [checkButtonIsClicked, setCheckButtonIsClicked] = useState(false);
    const [numCompletedProblems, setNumCompletedProblems] = useState(0);
    const [isFillInTheBlank, setIsFillInTheBlank] = useState(null);

    useEffect(() => {
        setNumCompletedProblems(0);
        setNumOfCorrect(0);
    }, [])

    useEffect(() => {
        setProblem(arrayOfProblems[index]);
    }, [index])

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
                {/*(isFillInTheBlank !== null) && 
                    (isFillInTheBlank) ? (
                        <FillInTheBlank
                            problemId={problem.id}
                            index={index}
                            setIndex={setIndex}
                            checkButtonIsClicked={checkButtonIsClicked}
                            setCheckButtonIsClicked={setCheckButtonIsClicked}
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
                            setIscorrect={setIsCorrect}
                            numCompletedProblems={numCompletedProblems}
                            setNumCompletedProblems={setNumCompletedProblems}
                            numOfProblems={arrayOfProblems.length}
                            numOfCorrect={numOfCorrect}
                            setNumOfCorrect={setNumOfCorrect}
                            arrayOfProblems={arrayOfProblems}
                        />
                    )*/}
                        <MultipleChoice
                            problemId={problem.id}
                            index={index}
                            setIndex={setIndex}
                            checkButtonIsClicked={checkButtonIsClicked}
                            setCheckButtonIsClicked={setCheckButtonIsClicked}
                            setIscorrect={setIsCorrect}
                            numCompletedProblems={numCompletedProblems}
                            setNumCompletedProblems={setNumCompletedProblems}
                            numOfProblems={arrayOfProblems.length}
                            numOfCorrect={numOfCorrect}
                            setNumOfCorrect={setNumOfCorrect}
                            arrayOfProblems={arrayOfProblems}
                        />
                <ReturnToDashboardButton
                    type={"test"}
                />
                {(checkButtonIsClicked) ? (
                    (isCorrect === true) ? (
                        <CorrectScreen/>
                    ) : (
                        <IncorrectScreen
                            problemId={problem.id}
                        />
                    )
                ) : (
                    <NeutralScreen/>
                )}
                <NumCompletedProblems
                    numCompletedProblems={numCompletedProblems}
                    numOfProblems={arrayOfProblems.length}
                />
            </div>
        </div>
    );
}
 
export default Test;