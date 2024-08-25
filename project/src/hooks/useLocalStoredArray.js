import {v4 as uuidv4} from 'uuid';
import {useEffect} from 'react';

const useLocalStoredArray = (localKey, arrayOfItems, setArrayOfItems) => {

    // Retrieves the array from the local storage
    useEffect(() => {
        const localStoredArray = localStorage.getItem(localKey);

        if ((localStoredArray !== null) && (localStoredArray !== "[]")) {
            setArrayOfItems(JSON.parse(localStoredArray));
        }
        else {
            setArrayOfItems([]);
        }
    }, [localKey])

    // Saves changes in the local storage whenever the array is modified
    useEffect(() => {
        if (arrayOfItems !== null) {
            localStorage.setItem(localKey, JSON.stringify(arrayOfItems));
        }
    }, [arrayOfItems])

    // Adds a new item to the array
    const handleClickAddItem = () => {
        const uniqueIdentifier = {
            id: uuidv4()
        }
        setArrayOfItems([...arrayOfItems, uniqueIdentifier]);
    }

    // Removes the answer and prompt input from the local storage
    const handleRemoveProblemInput = (problemInputId) => {
        const answerLocalKey = "answer" + problemInputId;
        const promptLocalKey = "prompt" + problemInputId;

        localStorage.removeItem(answerLocalKey);
        localStorage.removeItem(promptLocalKey);
    }

    // Removes all the answer and prompt inputs in a section from the local storage
    const handleRemoveProblemInputs = (arrayOfProblemInputs, setArrayOfProblemInputs) => {
        arrayOfProblemInputs.forEach((problemInput) => {
            handleRemoveProblemInput(problemInput.id);
        })
        setArrayOfProblemInputs(null);
    }

    const handleRemoveSection = (sectionLocalKey, setSectionIsSelected, setSectionTitle, setSelectedSectionRef, arrayOfProblemInputs, setArrayOfProblemInputs) => {
        const titleLocalKey = "title" + sectionLocalKey;

        localStorage.removeItem(titleLocalKey);
        setSectionIsSelected(false);
        setSectionTitle("");
        setSelectedSectionRef(null);

        handleRemoveProblemInputs(arrayOfProblemInputs, setArrayOfProblemInputs);
    }

    // Removes an item
    const handleClickRemoveItem = (type, id, setArrayOfProblemInputs, setSectionIsSelected, setSectionTitle, setSelectedSectionRef, arrayOfProblemInputs) => {
        if (type === "section") {
            handleRemoveSection(id, setSectionIsSelected, setSectionTitle, setSelectedSectionRef, arrayOfProblemInputs, setArrayOfProblemInputs);
        }
        else if (type === "problem-input") {
            handleRemoveProblemInput(id);
        }

        const newArray = arrayOfItems.filter((item) => item.id !== id);
        setArrayOfItems(newArray);
    }

    return {
        handleClickAddItem,
        handleClickRemoveItem
    };
}
 
export default useLocalStoredArray;