import {useState} from "react";
import './FillInTheBlank.css';
import NextButton from '../../components/NextButton/NextButton';
import CheckButton from '../../components/CheckButton/CheckButton';
import FinishButton from "../../components/FinishButton/FinishButton";
import useProblemVariables from "../../hooks/useProblemVariables";
import TopBorder from "../TopBorder/TopBorder";
import BottomBorder from "../BottomBorder/BottomBorder";

const FillInTheBlank = ({problemId, index, setIndex, checkButtonIsClicked, setCheckButtonIsClicked, isCorrect, setIsCorrect, numCompletedProblems, setNumCompletedProblems, 
                        numOfProblems, numOfCorrect, setNumOfCorrect}) => {
    const [userInput, setUserInput] = useState("");
    const {prompt, answer} = useProblemVariables(problemId);

    // Updates the value of the argument passed
    const handleChangeTextarea = (event) => {
        setUserInput(event.target.value);
    }

    return (  
        <div className="fill-in-the-blank-container">
            <div className="fill-in-the-blank">
                <TopBorder
                    isCorrect={isCorrect}
                    checkButtonIsClicked={checkButtonIsClicked}
                />
                <label className="fill-in-the-blank__prompt">
                    {prompt}
                </label>
                <div className="fill-in-the-blank__padding"/>
                <textarea 
                    className="fill-in-the-blank__answer-input"
                    value={userInput}
                    onChange={handleChangeTextarea}
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
 
export default FillInTheBlank;