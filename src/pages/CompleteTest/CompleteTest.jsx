import ReturnToDashboardButton from '../../components/ReturnToDashboardButton/ReturnToDashboardButton';
import './CompleteTest.css';

const CompleteTest = ({setNumOfCorrect}) => {
    const locallyStoredIndex = localStorage.getItem("index");
    const locallyStoredNumCorrect = localStorage.getItem("numOfCorrect");

    return (  
        <div className="complete-test-container">
            <div className="complete-test">
                <div className="complete-test__tab">
                    <div className="complete-test__tab__percent">
                        Percent: {(JSON.parse(locallyStoredNumCorrect) / (JSON.parse(locallyStoredIndex) + 1)).toFixed(4) * 100} %
                    </div>
                    <div className="complete-test__tab__ratio">
                        Ratio: {JSON.parse(locallyStoredNumCorrect)} / {(JSON.parse(locallyStoredIndex) + 1)}
                    </div>
                    <ReturnToDashboardButton
                        type={"test-complete"}
                        setNumOfCorrect={setNumOfCorrect}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default CompleteTest;