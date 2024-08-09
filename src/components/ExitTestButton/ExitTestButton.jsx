import {useNavigate} from 'react-router-dom';
import {handleClickSwitchPage} from '../../utils/SectionUtils';
import './ExitTestButton.css';

const ExitTestButton = ({}) => {
    const navigate = useNavigate();

    return (  
        <div className="exit-test-button-container">
            <button 
                className="exit-test-button"
                onClick={() => handleClickSwitchPage(navigate, "/")}
            >
                {"< Exit"}
            </button>
        </div>
    );
}
 
export default ExitTestButton;