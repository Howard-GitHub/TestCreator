import {handleClickNextProblem} from '../../utils/TestUtils';
import './NextButton.css';

const NextButton = ({index, setIndex, setUserAnswer, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems}) => {

    return (  
        <div className="next-button-container">
            <button 
                className="next-button"
                onClick={() => handleClickNextProblem(index, setIndex, setUserAnswer, setCheckButtonIsClicked, numCompletedProblems, setNumCompletedProblems)}
            >
                Next
            </button>
        </div>
    );
}
 
export default NextButton;