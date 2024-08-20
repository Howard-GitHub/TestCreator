import ReturnToDashboardButton from '../components/ReturnToDashboardButton/ReturnToDashboardButton';
import './CompleteTest.css';

const CompleteTest = ({numOfProblems, numOfCorrect, setNumOfCorrect}) => {

    return (  
        <div className="complete-test-container">
            <div className="complete-test">
                <div className="complete-test__tab">
                    <div className="complete-test__tab--percent">
                        Percent: {(numOfCorrect / numOfProblems).toFixed(4) * 100} %
                    </div>
                    <div className="complete-test__tab--ratio">
                        Ratio: {numOfCorrect} / {numOfProblems}
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