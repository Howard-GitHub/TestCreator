import {useNavigate} from 'react-router-dom';
import {handleClickSwitchPage} from '../../utils/NavigateUtils';
import './ReturnToDashboardButton.css';

const ReturnToDashboardButton = ({type}) => {
    const navigate = useNavigate();

    return (  
        <div className={`return-button-container--${type}`}>
            {(type === "test") ? (
                <button 
                    className="return-button--test"
                    onClick={() => handleClickSwitchPage(navigate, "/")}
                >
                    {"< Exit"}
                </button>
            ) : (
                <button 
                    className="return-button--test-complete"
                    onClick={() => handleClickSwitchPage(navigate, "/")}
                >
                    {"Return"}
                </button>
            )} 
        </div>
    );
}
 
export default ReturnToDashboardButton;