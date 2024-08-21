import './ErrorMessageTab.css';

const ErrorMessageTab = ({errorMessageTabRef}) => {
    return (  
        <div className="error-message-tab-container">
            <div 
                className="error-message-tab"
                ref={errorMessageTabRef}
                style={{

                }}
            >
                <label className="error-message-tab__text">
                    You Must Have 6 Sets to Test
                </label>
            </div>
        </div>
    );
}
 
export default ErrorMessageTab;