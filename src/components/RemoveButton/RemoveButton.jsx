import './RemoveButton.css';

const RemoveButton = ({type, handleClickRemoveItem, sectionId}) => {
    return (  
        <div className={`remove-button-container--${type}`}>
            <button 
                className="remove-button--section"
                onClick={() => handleClickRemoveItem(sectionId)}
            >
                Remove Section
            </button>
        </div>
    );
}
 
export default RemoveButton;