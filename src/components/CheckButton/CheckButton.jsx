import './CheckButton.css';

const CheckButton = ({userInput, answer, setIsCorrect, setCheckButtonIsClicked}) => {

    const handleClickCheck = () => {
        if (userInput === answer) {
            setIsCorrect(true);
        }
        else {
            setIsCorrect(false);
        }
        setCheckButtonIsClicked(true);
    }

    return (  
        <div className="check-button-container">
            <button 
                className="check-button"
                onClick={handleClickCheck}
            >
                Check
            </button>
        </div>
    );
}
 
export default CheckButton;