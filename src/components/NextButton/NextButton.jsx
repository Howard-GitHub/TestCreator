import {handleClickNextProblem} from '../../utils/TestUtils';
import './NextButton.css';

const NextButton = ({index, setIndex, setUserInput, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems}) => {

    return (  
        <div className="next-button-container">
            <button 
                className="next-button"
                onClick={() => handleClickNextProblem(index, setIndex, setUserInput, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems)}
            >
                Next
            </button>
        </div>
    );
}
 
export default NextButton;