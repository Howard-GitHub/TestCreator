import {useEffect, useState} from 'react';
import './Test.css';
import FillInTheBlank from '../components/FillInTheBlank/FillInTheBlank';
import NextButton from '../components/NextButton/NextButton';
import ExitTestButton from '../components/ExitTestButton/ExitTestButton';

const Test = ({arrayOfProblems}) => {
    const [index, setIndex] = useState(0);
    const [problem, setProblem] = useState(arrayOfProblems[0]);

    useEffect(() => {
        setProblem(arrayOfProblems[index]);
    }, [index])

    return (  
        <div className="test-container">
            <div className="test">
                <FillInTheBlank
                    problemId={problem.id}
                />
                <NextButton
                    index={index}
                    setIndex={setIndex}
                />
                <ExitTestButton/>
            </div>
        </div>
    );
}
 
export default Test;