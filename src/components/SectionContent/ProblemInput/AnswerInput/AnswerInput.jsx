import {useState} from 'react';
import './AnswerInput.css';
import useLocalStoredText from '../../../../hooks/useLocalStoredText';

const AnswerInput = ({problemInputId}) => {
    const [answerInput, setAnswerInput] = useState("");
    const {handleChangeTextarea} = useLocalStoredText(problemInputId, "answer", answerInput, setAnswerInput);

    return (  
        <div className="answer-input-container">
            <textarea 
                className="answer-input"
                value={answerInput}
                onChange={handleChangeTextarea}
            />
        </div>
    );
}
 
export default AnswerInput;