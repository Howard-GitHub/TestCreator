import {useRef} from 'react';
import './Choice.css';
import {handleClickChoice} from '../../../utils/TestUtils';


const Choice = ({option, selectedChoiceRef, setSelectedChoiceRef, setChosenAnswer, checkButtonIsClicked}) => {

    const choiceRef = useRef(null);

    return (  
        <div className="choice-container">
            <button 
                className="choice"
                ref={choiceRef}
                onClick={(event) => handleClickChoice(event, choiceRef, selectedChoiceRef, setSelectedChoiceRef, setChosenAnswer, option, checkButtonIsClicked)}
            >
                {option}
            </button>
        </div>
    );
}
 
export default Choice;