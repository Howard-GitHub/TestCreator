import './RemoveButton.css';

const RemoveButton = ({type, handleClickRemoveItem, setArrayOfProblemInputs, setSectionIsSelected, id}) => {
    return (  
        <div className={`remove-button-container--${type}`}>
            {(type === "section") ? (
                <button 
                    className="remove-button--section"
                    onClick={() => handleClickRemoveItem(type, id, setArrayOfProblemInputs, setSectionIsSelected)}
                >
                    Remove Section
                </button>
            ) : (
                <button
                    className="remove-button--problem-input"
                    onClick={() => handleClickRemoveItem(type, id)}
                >
                    x
                </button>
            )}
        </div>
    );
}
 
export default RemoveButton;