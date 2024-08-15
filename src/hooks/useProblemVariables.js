import {useState, useEffect} from "react";

const useProblemVariables = (problemId) => {

    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");

    // Sets the prompt and answer for each problem
    useEffect(() => {
        const promptLocalKey = "prompt" + problemId;
        const answerLocalKey = "answer" + problemId;
        const locallyStoredPrompt = localStorage.getItem(promptLocalKey);
        const locallyStoredAnswer = localStorage.getItem(answerLocalKey);
        setPrompt(locallyStoredPrompt);
        setAnswer(locallyStoredAnswer);
    }, [problemId])
    
    return {
        prompt,
        answer
    };
}
 
export default useProblemVariables;