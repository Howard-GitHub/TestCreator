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

    // Removes an item from the array
    const handleClickRemoveItem = (type, id, setArrayOfProblemInputs, setSectionIsSelected, setSectionTitle, setSelectedSectionRef) => {
        if (type === "section") {
            const sectionLocalKey = id;
            localStorage.removeItem(sectionLocalKey);
            setArrayOfProblemInputs(null);
            setSectionIsSelected(false);
            setSectionTitle("");
            setSectionIsSelected(null);
            setSelectedSectionRef(null);
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