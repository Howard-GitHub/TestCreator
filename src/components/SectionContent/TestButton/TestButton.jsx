import {handleClickTest} from '../../../utils/SectionUtils';
import './TestButton.css'
import {useNavigate} from 'react-router-dom';

const TestButton = ({arrayOfProblems, setArrayOfProblems, setShowErrorMessage, setNotEnoughProblems, sectionId}) => {
    
    const navigate = useNavigate();

    return (  
        <div className="test-button-container">
            <button 
                className="test-button"
                onClick={() => handleClickTest(setNotEnoughProblems, setShowErrorMessage, arrayOfProblems, setArrayOfProblems, sectionId, navigate, "/test")}
            >
                Test
            </button>
        </div>
    );
}
 
export default TestButton;