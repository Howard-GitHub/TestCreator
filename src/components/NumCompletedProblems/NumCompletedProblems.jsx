import './NumCompletedProblems.css';

const NumCompletedProblems = ({numCompletedProblems, numOfProblems}) => {
    return (  
        <div className="num-completed-problems-container">
            <label className="num-completed-problems">
                Completed: {numCompletedProblems} / {numOfProblems}
            </label>
        </div>
    );
}
 
export default NumCompletedProblems;