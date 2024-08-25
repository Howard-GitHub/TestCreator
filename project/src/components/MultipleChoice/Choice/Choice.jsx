import {useEffect, useRef} from 'react';
import './Choice.css';
import {handleClickChoice} from '../../../utils/TestUtils';

const Choice = ({option, selectedChoiceRef, setSelectedChoiceRef, setChosenAnswer, checkButtonIsClicked, index}) => {

    const choiceRef = useRef(null);

    // Resets the choice selection if the user refreshes or clicks the next button
    useEffect(() => {
        if (choiceRef.current.style.backgroundColor === "black") {
            choiceRef.current.style.backgroundColor = "rgb(18, 18, 18)";
            choiceRef.current.style.border = "1px solid darkslategray";
        }
    }, [index])

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