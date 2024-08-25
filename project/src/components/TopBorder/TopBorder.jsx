import './TopBorder.css';

const TopBorder = ({isCorrect, checkButtonIsClicked}) => {
    return (  
        <div className="top-border-container">
            <div className="top-border">
                {(checkButtonIsClicked) ? (
                    (isCorrect === true) ? (
                        <div className="top-border__correct">
                            <div className="top-border__correct__label-container">
                                <label className="top-border__correct__label">
                                    Correct
                                </label>
                            </div>
                        </div>
                    ) : (
                        <div className="top-border__incorrect">
                            <div className="top-border__incorrect__label-container">
                                <label className="top-border__incorrect__label">
                                    Incorrect
                                </label>
                            </div>
                        </div>                    
                        )
                    ) : (
                        <div className="top-border__neutral"/>
                    )
                }
            </div>
        </div>
    );
}
 
export default TopBorder;