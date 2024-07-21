import './AddButton.css';

const AddButton = ({type, handleOnClickAddItem, arrayOfSectionsLength}) => {
    return (  
        <div className={`add-button-container-${type}`}>
            {type === "section" ? (
                <button 
                    className="add-button-section"
                    onClick={handleOnClickAddItem}
                >
                    Add Section
                </button>
            ) : (
                <button className="add-button-term">
                    Add Term
                </button>
            )}
        </div>
    );
}
 
export default AddButton;