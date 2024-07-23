import './RemoveButton.css';

const RemoveButton = ({type}) => {
    return (  
        <div className={`remove-button-container--${type}`}>
            <button className="remove-button--section">
                Remove Section
            </button>
        </div>
    );
}
 
export default RemoveButton;