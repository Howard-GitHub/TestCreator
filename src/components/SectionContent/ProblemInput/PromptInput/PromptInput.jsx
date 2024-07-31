import {useState} from 'react';
import useLocalStoredText from '../../../../hooks/useLocalStoredText';
import './PromptInput.css';

const PromptInput = ({problemInputId}) => {
    const [promptInput, setPromptInput] = useState("");
    const {handleChangeTextarea} = useLocalStoredText(problemInputId, "prompt", promptInput, setPromptInput);

    return (  
        <div className="prompt-input-container">
            <textarea 
                className="prompt-input"
                value={promptInput}
                onChange={handleChangeTextarea}
            />
        </div>
    );
}
 
export default PromptInput;