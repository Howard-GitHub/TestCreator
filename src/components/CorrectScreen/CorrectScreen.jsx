import './CorrectScreen.css';

const CorrectScreen = () => {
    return (  
        <div className="correct-screen-container">
            <div className="correct-screen">
                <div className="correct-screen__top-border">
                    <div className="correct-screen__label-container">
                        <label className='correct-screen__label'>
                            Correct
                        </label>
                    </div>
                </div>
                <div className="correct-screen__bottom-border"/>
            </div>
        </div>
    );
}
 
export default CorrectScreen;