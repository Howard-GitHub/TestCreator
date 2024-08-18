import {useRef} from 'react';
import './Choice.css';


const Choice = ({option, selectedChoiceRef, setSelectedChoiceRef, setChosenAnswer, checkButtonIsClicked}) => {

    const choiceRef = useRef(null);

    const handleClickChoice = (event) => {
        if (checkButtonIsClicked) {
            event.preventDefault();
        }
        else {
            const previousChoiceRef = selectedChoiceRef;
            if (previousChoiceRef) {
                previousChoiceRef.current.style.backgroundColor = "rgb(18, 18, 18)";
                previousChoiceRef.current.style.border = "1px solid darkslategray";
            }
            choiceRef.current.style.backgroundColor = "black";
            choiceRef.current.style.border = "3px solid darkslategray";
            setSelectedChoiceRef(choiceRef);
            setChosenAnswer(option);
        }
    }

    return (  
        <div className="choice-container">
            <button 
                className="choice"
                ref={choiceRef}
                onClick={(event) => handleClickChoice(event)}
            >
                {option}
            </button>
        </div>
    );
}
 
export default Choice;