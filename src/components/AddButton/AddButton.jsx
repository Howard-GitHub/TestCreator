import './AddButton.css';

const AddButton = ({type}) => {
    return (  
        <div className={`add-button-container-${type}`}>
            {type === "section" ? (
                <button className="add-button-section">
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