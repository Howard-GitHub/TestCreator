import {handleClickNextProblem} from '../../utils/TestUtils';
import './NextButton.css';

const NextButton = ({index, setIndex}) => {

    return (  
        <div className="next-button-container">
            <button 
                className="next-button"
                onClick={() => handleClickNextProblem(index, setIndex)}
            >
                Next
            </button>
        </div>
    );
}
 
export default NextButton;