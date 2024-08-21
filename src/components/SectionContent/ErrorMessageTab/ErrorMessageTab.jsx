import './ErrorMessageTab.css';

const ErrorMessageTab = ({errorMessageTabRef, notEnoughProblems}) => {
    return (  
        <div className="error-message-tab-container">
            <div 
                className="error-message-tab"
                ref={errorMessageTabRef}
                style={{

                }}
            >
                <label className="error-message-tab__text">
                    {(notEnoughProblems) ? (
                        "You Must Have At Least 6 Sets to Test"
                    ) : (
                        "Every Input Area Must Have Input"
                    )}
                </label>
            </div>
        </div>
    );
}
 
export default ErrorMessageTab;