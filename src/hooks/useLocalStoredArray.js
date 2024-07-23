import {v4 as uuidv4} from 'uuid';
import {useEffect} from 'react';

const useLocalStoredArray = (localKey, arrayOfItems, setArrayOfItems) => {

    // Retrieves the array from the local storage
    useEffect(() => {
        const localStoredArray = localStorage.getItem(localKey);

        if ((localStoredArray !== null) && (localStoredArray !== "[]")) {
            setArrayOfItems(JSON.parse(localStoredArray));
        }
    }, [])

    // Saves changes in the local storage whenever the array is modified
    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(arrayOfItems));
    }, [arrayOfItems])

    // Adds a new item to the array
    const handleClickAddItem = () => {
        const uniqueIdentifier = {
            id: uuidv4()
        }
        setArrayOfItems([...arrayOfItems, uniqueIdentifier]);
        console.log("running", arrayOfItems);
    }

    return {
        handleClickAddItem
    };
}
 
export default useLocalStoredArray;