import {useState} from 'react';
import useLocalStoredText from '../../../../hooks/useLocalStoredText';
import './PromptInput.css';
import {handleKeyDownEnter} from '../../../../utils/TextareaUtils';

const PromptInput = ({problemInputId}) => {
    const [promptInput, setPromptInput] = useState("");
    const {handleChangeTextarea} = useLocalStoredText(problemInputId, "prompt", promptInput, setPromptInput);

    return (  
        <div className="prompt-input-container">
            <textarea 
                className="prompt-input"
                value={promptInput}
                onChange={handleChangeTextarea}
                onKeyDown={(event) => handleKeyDownEnter(event)}
            />
        </div>
    );
}
 
export default PromptInput;