import {useNavigate} from 'react-router-dom';
import './ReturnToDashboardButton.css';
import {handleClickReturnToDashboard} from '../../utils/TestUtils';

const ReturnToDashboardButton = ({type, setNumOfCorrect, setSectionId, setArrayOfProblems, setSectionIsSelected}) => {
    
    const navigate = useNavigate();

    return (  
        <div className={`return-button-container--${type}`}>
            {(type === "test") ? (
                <button 
                    className="return-button--test"
                    onClick={() => handleClickReturnToDashboard(navigate, "/", setNumOfCorrect, setSectionId, setArrayOfProblems, setSectionIsSelected)}
                >
                    {"< Exit"}
                </button>
            ) : (
                <button 
                    className="return-button--test-complete"
                    onClick={() => handleClickReturnToDashboard(navigate, "/", setNumOfCorrect, setSectionId, setArrayOfProblems, setSectionIsSelected)}
                >
                    {"Return"}
                </button>
            )} 
        </div>
    );
}
 
export default ReturnToDashboardButton;