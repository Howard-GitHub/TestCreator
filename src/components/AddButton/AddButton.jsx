import './AddButton.css';

const AddButton = ({type, handleClickAddItem}) => {
    return (  
        <div className={`add-button-container add-button-container--${type}`}>
            {type === "section" ? (
                <button 
                    className="add-button add-button--section"
                    onClick={handleClickAddItem}
                >
                    Add Section
                </button>
            ) : (
                <button 
                    className="add-button add-button--problem"
                    onClick={handleClickAddItem}
                >
                    +
                </button>
            )}
        </div>
    );
}
 
export default AddButton;