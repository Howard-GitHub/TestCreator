import {useState, useEffect} from "react";
import useProblemVariables from "../../hooks/useProblemVariables";
import FinishButton from "../FinishButton/FinishButton";
import NextButton from "../NextButton/NextButton";
import './MultipleChoice.css';
import Choice from "./Choice/Choice";
import {handleShuffle} from "../../utils/SectionUtils";
import CheckButton from "../CheckButton/CheckButton";
import TopBorder from "../TopBorder/TopBorder";
import BottomBorder from "../BottomBorder/BottomBorder";

const MultipleChoice = ({problemId, index, setIndex, checkButtonIsClicked, setCheckButtonIsClicked, isCorrect, setIsCorrect, numCompletedProblems, setNumCompletedProblems,
                        numOfProblems, numOfCorrect, setNumOfCorrect, arrayOfProblems}) => {

    const {prompt, answer} = useProblemVariables(problemId);
    const [options, setOptions] = useState([]);
    const [stop, setStop] = useState(false);
    const [selectedChoiceRef, setSelectedChoiceRef] = useState(null);
    const [chosenAnswer, setChosenAnswer] = useState("");

    // Stores the four choices that the user can choose from
    useEffect(() => {  
        if ((!stop) && (answer !== "")) {
            let firstRandomIndex;
            let secondRandomIndex;
            let thirdRandomIndex;
            let indexWithAnswer = index;
            let randomOptionOne;
            let randomOptionTwo;
            let randomOptionThree;
            let optionWithAnswer = answer;
            
            do {
                firstRandomIndex = Math.floor(Math.random() * arrayOfProblems.length);
            } while (firstRandomIndex === indexWithAnswer)
            do {
                secondRandomIndex = Math.floor(Math.random() * arrayOfProblems.length);
            } while ((secondRandomIndex === indexWithAnswer) || (secondRandomIndex === firstRandomIndex));
            do {
                thirdRandomIndex = Math.floor(Math.random() * arrayOfProblems.length);
            } while ((thirdRandomIndex == indexWithAnswer) || (thirdRandomIndex == firstRandomIndex) || (thirdRandomIndex == secondRandomIndex))

            randomOptionOne = localStorage.getItem("answer" + arrayOfProblems[firstRandomIndex].id);
            randomOptionTwo = localStorage.getItem("answer" + arrayOfProblems[secondRandomIndex].id);
            randomOptionThree = localStorage.getItem("answer" + arrayOfProblems[thirdRandomIndex].id);
            setOptions([optionWithAnswer, randomOptionOne, randomOptionTwo, randomOptionThree]);
        }
    }, [index, stop, answer])


    // Shuffles the options in random order
    useEffect(() => {
        if ((options.length > 0) && (answer === options[0]) && !stop) {
            handleShuffle(options, setOptions);
            setStop(true);
        }
    }, [options, stop, answer])

    // Deselects the selected choice
    useEffect(() => {
        setStop(false);
        if (selectedChoiceRef) {
            selectedChoiceRef.current.style.backgroundColor = "rgb(18, 18, 18)";
            selectedChoiceRef.current.style.border = "1px solid darkslategray";
            setSelectedChoiceRef(null);
        }
    }, [answer])

    return (  
        <div className="multiple-choice-container">
            <div className="multiple-choice">
                <TopBorder
                    isCorrect={isCorrect}
                    checkButtonIsClicked={checkButtonIsClicked}
                />
                <label className="multiple-choice__prompt">
                    {prompt}
                </label>
                <div className="multiple-choice__choices">
                    <Choice
                        option={options[0]}
                        selectedChoiceRef={selectedChoiceRef}
                        setSelectedChoiceRef={setSelectedChoiceRef}
                        setChosenAnswer={setChosenAnswer}
                        checkButtonIsClicked={checkButtonIsClicked}
                    />
                    <Choice
                        option={options[1]}
                        selectedChoiceRef={selectedChoiceRef}
                        setSelectedChoiceRef={setSelectedChoiceRef}
                        setChosenAnswer={setChosenAnswer}
                        checkButtonIsClicked={checkButtonIsClicked}
                    />
                    <Choice
                        option={options[2]}
                        selectedChoiceRef={selectedChoiceRef}
                        setSelectedChoiceRef={setSelectedChoiceRef}
                        setChosenAnswer={setChosenAnswer}
                        checkButtonIsClicked={checkButtonIsClicked}
                    />
                    <Choice
                        option={options[3]}
                        selectedChoiceRef={selectedChoiceRef}
                        setSelectedChoiceRef={setSelectedChoiceRef}
                        setChosenAnswer={setChosenAnswer}
                        checkButtonIsClicked={checkButtonIsClicked}
                    />
                </div>
                <BottomBorder
                    isCorrect={isCorrect}
                    checkButtonIsClicked={checkButtonIsClicked}
                    answer={answer}
                />
            </div>
            {(!checkButtonIsClicked) ? (
                <CheckButton 
                    answer={answer}
                    userInput={chosenAnswer}
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
                            setUserAnswer={setChosenAnswer}
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
 
export default MultipleChoice;