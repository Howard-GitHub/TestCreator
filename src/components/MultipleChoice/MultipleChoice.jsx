import {useState, useEffect, useRef} from "react";
import useProblemVariables from "../../hooks/useProblemVariables";
import FinishButton from "../FinishButton/FinishButton";
import NextButton from "../NextButton/NextButton";
import './MultipleChoice.css';
import Choice from "./Choice/Choice";
import {handleShuffle} from "../../utils/SectionUtils";

const MultipleChoice = ({problemId, index, setIndex, checkButtonIsClicked, setCheckButtonIsClicked, setIscorrect, numCompletedProblems, setNumCompletedProblems,
                        numOfProblems, numOfCorrect, setNumOfCorrect, arrayOfProblems}) => {

    const {prompt, answer} = useProblemVariables(problemId);
    const [userInput, setUserInput] = useState("");
    const [options, setOptions] = useState([]);
    const [stop, setStop] = useState(false);

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
            setOptions([randomOptionOne, randomOptionTwo, randomOptionThree, optionWithAnswer]);
        }
    }, [problemId, stop, answer])


    useEffect(() => {
        if ((options.length > 0) && (!stop)) {
            handleShuffle(options, setOptions);
            setStop(true);
        }
    }, [options, stop])

    useEffect(() => {
        setStop(false);
    }, [index])

    return (  
        <div className="multiple-choice-container">
            <div className="multiple-choice">
                <label className="multiple-choice__prompt">
                    {prompt}
                </label>
                <div className="multiple-choice__choices">
                    <Choice
                        option={options[0]}
                    />
                    <Choice
                        option={options[1]}
                    />
                    <Choice
                        option={options[2]}
                    />
                    <Choice
                        option={options[3]}
                    />
                </div>
                {(index < (numOfProblems - 1)) ? (
                    <NextButton
                        index={index}
                        setIndex={setIndex}
                        setUserInput={setUserInput}
                        setCheckButtonIsClicked={setCheckButtonIsClicked}
                        numCompletedProblems={numCompletedProblems}
                        setNumCompletedProblems={setNumCompletedProblems}
                    />
                    ) : (
                        <FinishButton/>
                    )
                }
            </div>
        </div>
    );
}
 
export default MultipleChoice;