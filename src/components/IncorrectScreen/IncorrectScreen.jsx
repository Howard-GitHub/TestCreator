import './IncorrectScreen.css';

const IncorrectScreen = () => {
    return (  
        <div className="incorrect-screen-container">
            <div className="incorrect-screen-container">
                <div className="incorrect-screen">
                    <div className="incorrect-screen__top-border">
                        <div className="incorrect-screen__label-container">
                            <label className='incorrect-screen__label'>
                                Incorrect
                            </label>
                        </div>
                    </div>
                    <div className="incorrect-screen__bottom-border"/>
                </div>
            </div>
        </div>
    );
}
 
export default IncorrectScreen;