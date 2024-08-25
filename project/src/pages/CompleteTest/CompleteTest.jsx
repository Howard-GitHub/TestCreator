import ReturnToDashboardButton from '../../components/ReturnToDashboardButton/ReturnToDashboardButton';
import './CompleteTest.css';

const CompleteTest = ({setNumOfCorrect, setSectionId, setArrayOfProblems, setSectionIsSelected}) => {
    const locallyStoredIndex = localStorage.getItem("index");
    const locallyStoredNumCorrect = localStorage.getItem("numOfCorrect");

    return (  
        <div className="complete-test-container">
            <div className="complete-test">
                <div className="complete-test__tab">
                    <div className="complete-test__tab__percent">
                        Percent: {((JSON.parse(locallyStoredNumCorrect) / (JSON.parse(locallyStoredIndex) + 1)) * 100).toFixed(1)} %
                    </div>
                    <div className="complete-test__tab__ratio">
                        Ratio: {JSON.parse(locallyStoredNumCorrect)} / {(JSON.parse(locallyStoredIndex) + 1)}
                    </div>
                    <ReturnToDashboardButton
                        type={"test-complete"}
                        setNumOfCorrect={setNumOfCorrect}
                        setSectionId={setSectionId}
                        setArrayOfProblems={setArrayOfProblems}
                        setSectionIsSelected={setSectionIsSelected}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default CompleteTest;