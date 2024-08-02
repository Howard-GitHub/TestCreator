import {handleClickShuffle} from '../../../utils/SectionUtils';
import './TestButton.css'

const TestButton = ({arrayOfProblems, setArrayOfProblems}) => {
    return (  
        <div className="test-button-container">
            <button 
                className="test-button"
                //onClick={() => handleClickShuffle(arrayOfProblems, setArrayOfProblems)}
            >
                Test
            </button>
        </div>
    );
}
 
export default TestButton;