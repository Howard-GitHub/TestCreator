import {useEffect, useState} from "react";
import './FillInTheBlank.css';

const FillInTheBlank = ({problemId}) => {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [answerInput, setAnswerInput] = useState("");

    // Updates the value of the argument passed
    const handleChangeTextarea = (event) => {
        setAnswerInput(event.target.value);
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
                    value={answerInput}
                    onChange={handleChangeTextarea}
                />
            </div>
        </div>
    );
}
 
export default FillInTheBlank;