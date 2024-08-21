import {handleClickTest} from '../../../utils/SectionUtils';
import './TestButton.css'
import {useNavigate} from 'react-router-dom';

const TestButton = ({arrayOfProblems, setArrayOfProblems, setShowErrorMessage}) => {
    const navigate = useNavigate();

    return (  
        <div className="test-button-container">
            <button 
                className="test-button"
                onClick={() => handleClickTest(setShowErrorMessage, arrayOfProblems, setArrayOfProblems, navigate, "/test")}
            >
                Test
            </button>
        </div>
    );
}
 
export default TestButton;