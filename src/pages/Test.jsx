import {useEffect, useState} from 'react';
import './Test.css';
import FillInTheBlank from '../components/FillInTheBlank/FillInTheBlank';

const Test = ({arrayOfProblems}) => {
    const [index, setIndex] = useState(0);
    const [problem, setProblem] = useState(arrayOfProblems[0]);

    useEffect(() => {
        setProblem(arrayOfProblems[index]);
        console.log("id", arrayOfProblems[index]);
    }, [index])

    return (  
        <div className="test-container">
            <div className="test">
                <FillInTheBlank
                    problemId={problem.id}
                />
            </div>
        </div>
    );
}
 
export default Test;