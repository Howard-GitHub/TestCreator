import AnswerInput from './AnswerInput/AnswerInput';
import PromptInput from './PromptInput/PromptInput';
import './ProblemInput.css';

const ProblemInput = ({id}) => {
    return (  
        <div className="problem-input-container">
            <div className="problem-input">
                <AnswerInput/>
                <PromptInput/>
            </div>
        </div>
    );
}
 
export default ProblemInput;