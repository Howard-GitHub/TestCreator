import {useEffect} from "react";

const useLocalStoredText = (id, type, text, setText) => {

    /* 
       This variable checks the number of times the useEffect retrieving the text from the local 
       storage runs. This is used with a conditional to display an empty title input if the user 
       switches to a section without a title.
    */
    let numTimesRun = 0;

    // Retrieves the text stored in the local storage
    useEffect(() => {
        const localKey = type + id;
        const locallyStoredText = localStorage.getItem(localKey);
        if (locallyStoredText) {
            setText(locallyStoredText);
            numTimesRun = numTimesRun + 1;
        }
        else if (numTimesRun !== 1) {
            setText("");
            numTimesRun = 0;
        }
    }, [id])

    // Saves changes made to the text in the local storage
    useEffect(() => {
        const localKey = type + id 
        localStorage.setItem(localKey, text);
        console.log("use", localKey);
    }, [text])

    // Updates the value of the argument passed
    const handleChangeTextarea = (event) => {
        setText(event.target.value);
    }

    return {
        handleChangeTextarea
    };
}
 
export default useLocalStoredText;