import './AddButton.css';

const AddButton = ({type, handleClickAddItem}) => {
    return (  
        <div className={`add-button-container-${type}`}>
            {type === "section" ? (
                <button 
                    className="add-button-section"
                    onClick={handleClickAddItem}
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