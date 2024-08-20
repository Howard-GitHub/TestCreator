import {useNavigate} from 'react-router-dom';
import './ReturnToDashboardButton.css';
import {handleClickReturnToDashboard} from '../../utils/TestUtils';

const ReturnToDashboardButton = ({type, setNumOfCorrect}) => {
    const navigate = useNavigate();

    return (  
        <div className={`return-button-container--${type}`}>
            {(type === "test") ? (
                <button 
                    className="return-button--test"
                    onClick={() => handleClickReturnToDashboard(navigate, "/", setNumOfCorrect)}
                >
                    {"< Exit"}
                </button>
            ) : (
                <button 
                    className="return-button--test-complete"
                    onClick={() => handleClickReturnToDashboard(navigate, "/", setNumOfCorrect)}
                >
                    {"Return"}
                </button>
            )} 
        </div>
    );
}
 
export default ReturnToDashboardButton;