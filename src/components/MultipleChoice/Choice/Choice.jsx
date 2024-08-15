import { useEffect } from 'react';
import './Choice.css';

const Choice = ({option}) => {

    useEffect(() => {
        //console.log("in choice", option);
    }, [option])

    return (  
        <div className="choice-container">
            <button className="choice">
                {option}
            </button>
        </div>
    );
}
 
export default Choice;