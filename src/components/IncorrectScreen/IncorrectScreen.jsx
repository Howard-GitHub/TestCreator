import {useState, useEffect} from 'react';
import './IncorrectScreen.css';

const IncorrectScreen = ({problemId}) => {

    const [correctAnswer, setCorrectAnswer] = useState("");

    useEffect(() => {
        const answerLocalKey = "answer" + problemId 
        const locallyStoredAnswer = localStorage.getItem(answerLocalKey);

        setCorrectAnswer(locallyStoredAnswer);
    }, [problemId])

    return (  
        <div className="incorrect-screen-container">
            <div className="incorrect-screen-container">
                <div className="incorrect-screen">
                    <div className="incorrect-screen__top-border">
                        <div className="incorrect-screen__label-container">
                            <label className='incorrect-screen__label'>
                                Incorrect
                            </label>
                        </div>
                    </div>
                    <div className="incorrect-screen__bottom-section">
                        <label className="incorrect-screen__bottom-section__label">
                            Correct Answer: {correctAnswer}
                        </label>
                        <div className="incorrect-screen__bottom-section__bottom-border"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default IncorrectScreen;