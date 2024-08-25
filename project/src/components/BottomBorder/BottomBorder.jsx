import './BottomBorder.css';

const BottomBorder = ({isCorrect, checkButtonIsClicked, answer}) => {

    return (  
        <div className="bottom-border-container">
            <div className="bottom-border">
                {(checkButtonIsClicked) ? (
                    (isCorrect === true) ? (
                        <div className="bottom-border__correct"/>
                    ) : (
                        <div className="bottom-border__incorrect">
                            <label className="bottom-border__incorrect__label">
                                Correct Answer: {answer}
                            </label>
                            <div className="bottom-border__incorrect__line"/>
                        </div>
                    )
                    ) : (
                        <div className="bottom-border__neutral"/>
                    )
                }
            </div>
        </div>
    );
}
 
export default BottomBorder;