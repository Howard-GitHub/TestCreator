import {useEffect, useState} from 'react';
import './Test.css';
import FillInTheBlank from '../components/FillInTheBlank/FillInTheBlank';
import ExitTestButton from '../components/ExitTestButton/ExitTestButton';
import CorrectScreen from '../components/CorrectScreen/CorrectScreen';
import IncorrectScreen from '../components/IncorrectScreen/IncorrectScreen';
import NeutralScreen from '../components/NeutralScreen/NeutralScreen';
import NumCompletedProblems from '../components/NumCompletedProblems/NumCompletedProblems';

const Test = ({arrayOfProblems}) => {
    const [index, setIndex] = useState(0);
    const [problem, setProblem] = useState(arrayOfProblems[0]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [checkButtonIsClicked, setCheckButtonIsClicked] = useState(false);
    const [numCompletedProblems, setNumCompletedProblems] = useState(0);

    useEffect(() => {
        setProblem(arrayOfProblems[index]);
    }, [index])

    return (  
        <div className="test-container">
            <div className="test">
                <FillInTheBlank
                    problemId={problem.id}
                    index={index}
                    setIndex={setIndex}
                    checkButtonIsClicked={checkButtonIsClicked}
                    setCheckButtonIsClicked={setCheckButtonIsClicked}
                    setIsCorrect={setIsCorrect}
                    numCompletedProblems={numCompletedProblems}
                    setNumCompletedProblems={setNumCompletedProblems}
                />
                <ExitTestButton/>
                {(checkButtonIsClicked) ? (
                    (isCorrect === true) ? (
                        <CorrectScreen/>
                    ) : (
                        <IncorrectScreen/>
                    )
                ) : (
                    <NeutralScreen/>
                )}
                <NumCompletedProblems
                    numCompletedProblems={numCompletedProblems}
                    numProblems={arrayOfProblems.length}
                />
            </div>
        </div>
    );
}
 
export default Test;