import AnswerInput from './AnswerInput/AnswerInput';
import PromptInput from './PromptInput/PromptInput';
import './ProblemInput.css';
import RemoveButton from '../../RemoveButton/RemoveButton';

const ProblemInput = ({problemInputId, handleClickRemoveProblemInput}) => {
    return (  
        <div className="problem-input-container">
            <div className="problem-input">
                <AnswerInput/>
                <PromptInput/>
            </div>
            <RemoveButton
                type={"problem-input"}
                handleClickRemoveItem={handleClickRemoveProblemInput}
                id={problemInputId}
            />
        </div>
    );
}
 
export default ProblemInput;