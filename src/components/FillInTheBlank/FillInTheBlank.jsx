import {useEffect, useState} from "react";
import './FillInTheBlank.css';
import NextButton from '../../components/NextButton/NextButton';
import CheckButton from '../../components/CheckButton/CheckButton';

const FillInTheBlank = ({problemId, index, setIndex, checkButtonIsClicked, setCheckButtonIsClicked, setIsCorrect, numCompletedProblems, setNumCompletedProblems}) => {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [userInput, setUserInput] = useState("");

    // Updates the value of the argument passed
    const handleChangeTextarea = (event) => {
        setUserInput(event.target.value);
    }

    useEffect(() => {
        const promptLocalKey = "prompt" + problemId;
        const answerLocalKey = "answer" + problemId;
        const locallyStoredPrompt = localStorage.getItem(promptLocalKey);
        const locallyStoredAnswer = localStorage.getItem(answerLocalKey);
        setPrompt(locallyStoredPrompt);
        setAnswer(locallyStoredAnswer);
    }, [problemId])

    return (  
        <div className="fill-in-the-blank-container">
            <div className="fill-in-the-blank">
                <label className="fill-in-the-blank__prompt">
                    {prompt}
                </label>
                <textarea 
                    className="fill-in-the-blank__answer-input"
                    value={userInput}
                    onChange={handleChangeTextarea}
                />
            </div>
            {(!checkButtonIsClicked) ? (
                    <CheckButton 
                        answer={answer}
                        userInput={userInput}
                        setCheckButtonIsClicked={setCheckButtonIsClicked}
                        setIsCorrect={setIsCorrect}
                    />
                ) : (
                    <NextButton
                        index={index}
                        setIndex={setIndex}
                        setUserInput={setUserInput}
                        setCheckButtonIsClicked={setCheckButtonIsClicked}
                        numCompletedProblems={numCompletedProblems}
                        setNumCompletedProblems={setNumCompletedProblems}
                    />
                )}
        </div>
    );
}
 
export default FillInTheBlank;