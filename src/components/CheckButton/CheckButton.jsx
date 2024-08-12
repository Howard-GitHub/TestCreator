import {handleClickCheck} from '../../utils/TestUtils';
import './CheckButton.css';

const CheckButton = ({userInput, answer, setIsCorrect, setCheckButtonIsClicked, numOfCorrect, setNumOfCorrect}) => {
    return (  
        <div className="check-button-container">
            <button 
                className="check-button"
                onClick={() => handleClickCheck(userInput, answer, setIsCorrect, numOfCorrect, setNumOfCorrect, setCheckButtonIsClicked)}
            >
                Check
            </button>
        </div>
    );
}
 
export default CheckButton;