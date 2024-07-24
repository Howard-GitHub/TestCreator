import {useEffect} from "react";

const useLocalStoredText = (sectionId, type, text, setText) => {

    // Retrieves the text stored in the local storage
    useEffect(() => {
        const localKey = type + sectionId 
        const locallyStoredText = localStorage.getItem(localKey);

        if (locallyStoredText) {
            setText(locallyStoredText);
        }
        else {
            setText("");
        }
        
    }, [sectionId])

    // Saves changes made to the text in the local storage
    useEffect(() => {
        const localKey = type + sectionId 
        localStorage.setItem(localKey, text);
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