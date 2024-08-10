import {handleClickNextProblem} from '../../utils/TestUtils';
import './NextButton.css';

const NextButton = ({index, setIndex, setUserInput, setCheckButtonIsClicked}) => {

    return (  
        <div className="next-button-container">
            <button 
                className="next-button"
                onClick={() => handleClickNextProblem(index, setIndex, setUserInput, setCheckButtonIsClicked)}
            >
                Next
            </button>
        </div>
    );
}
 
export default NextButton;