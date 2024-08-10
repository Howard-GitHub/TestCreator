import {handleClickNextProblem} from '../../utils/TestUtils';
import './NextButton.css';

const NextButton = ({index, setIndex, setCheckButtonIsClicked}) => {

    return (  
        <div className="next-button-container">
            <button 
                className="next-button"
                onClick={() => handleClickNextProblem(index, setIndex, setCheckButtonIsClicked)}
            >
                Next
            </button>
        </div>
    );
}
 
export default NextButton;