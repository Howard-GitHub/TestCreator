import {useNavigate} from 'react-router-dom';
import './FinishButton.css';
import {handleClickSwitchPage} from '../../utils/NavigateUtils';

const FinishButton = () => {

    const navigate = useNavigate();

    return (  
        <div className="finish-button-container">
            <button
                className="finish-button"
                onClick={() => handleClickSwitchPage(navigate, "/test/complete")}
            >
                Finish
            </button>
        </div>
    );
}
 
export default FinishButton;