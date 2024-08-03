import {useNavigate} from 'react-router-dom';
import {handleClickShuffle} from '../../../utils/SectionUtils';
import './TestButton.css'

const TestButton = ({arrayOfProblems, setArrayOfProblems}) => {

    const navigate = useNavigate();

    const handleClickTestPage = () => {
        navigate("/test");
    }

    return (  
        <div className="test-button-container">
            <button 
                className="test-button"
                onClick={handleClickTestPage}
                //onClick={() => handleClickShuffle(arrayOfProblems, setArrayOfProblems)}
            >
                Test
            </button>
        </div>
    );
}
 
export default TestButton;