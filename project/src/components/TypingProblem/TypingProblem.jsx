import {useState} from "react";
import './TypingProblem.css';
import NextButton from '../NextButton/NextButton';
import CheckButton from '../CheckButton/CheckButton';
import FinishButton from "../FinishButton/FinishButton";
import useProblemVariables from "../../hooks/useProblemVariables";
import TopBorder from "../TopBorder/TopBorder";
import BottomBorder from "../BottomBorder/BottomBorder";
import {handleChangeTestAnswerInput, handleKeyDownEnter} from "../../utils/TextareaUtils";

const TypingProblem = ({problemId, index, setIndex, checkButtonIsClicked, setCheckButtonIsClicked, isCorrect, setIsCorrect, numCompletedProblems, setNumCompletedProblems, 
                        numOfProblems, numOfCorrect, setNumOfCorrect}) => {
    
    const [userInput, setUserInput] = useState("");
    const {prompt, answer} = useProblemVariables(problemId);

    return (  
        <div className="typing-question-container">
            <div className="typing-question">
                <TopBorder
                    isCorrect={isCorrect}
                    checkButtonIsClicked={checkButtonIsClicked}
                />
                <label className="typing-question__prompt">
                    {prompt}
                </label>
                <div className="typing-question__padding"/>
                <textarea 
                    className="typing-question__answer-input"
                    value={userInput}
                    onChange={(event) => handleChangeTestAnswerInput(event, setUserInput)}
                    onKeyDown={handleKeyDownEnter}
                />
                <BottomBorder
                    isCorrect={isCorrect}
                    checkButtonIsClicked={checkButtonIsClicked}
                    answer={answer}
                />
            </div>
            {(!checkButtonIsClicked) ? (
                <CheckButton 
                    answer={answer}
                    userInput={userInput}
                    setCheckButtonIsClicked={setCheckButtonIsClicked}
                    setIsCorrect={setIsCorrect}
                    numOfCorrect={numOfCorrect}
                    setNumOfCorrect={setNumOfCorrect}
                />
            ) : (
                (index < (numOfProblems - 1)) ? (
                <NextButton
                    index={index}
                    setIndex={setIndex}
                    setUserAnswer={setUserInput}
                    setCheckButtonIsClicked={setCheckButtonIsClicked}
                    numCompletedProblems={numCompletedProblems}
                    setNumCompletedProblems={setNumCompletedProblems}
                />
                ) : (
                    <FinishButton/>
                )
            )}
        </div>
    );
}
 
export default TypingProblem;