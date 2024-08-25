import {useState} from 'react';
import './AnswerInput.css';
import useLocalStoredText from '../../../../hooks/useLocalStoredText';
import {handleKeyDownEnter} from '../../../../utils/TextareaUtils';

const AnswerInput = ({problemInputId}) => {
    
    const [answerInput, setAnswerInput] = useState("");
    const {handleChangeTextarea} = useLocalStoredText(problemInputId, "answer", answerInput, setAnswerInput);

    return (  
        <div className="answer-input-container">
            <textarea 
                className="answer-input"
                value={answerInput}
                onChange={handleChangeTextarea}
                onKeyDown={(event) => handleKeyDownEnter(event)}
            />
        </div>
    );
}
 
export default AnswerInput;