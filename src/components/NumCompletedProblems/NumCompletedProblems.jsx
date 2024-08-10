import './NumCompletedProblems.css';

const NumCompletedProblems = ({numCompletedProblems, numProblems}) => {
    return (  
        <div className="num-completed-problems-container">
            <label className="num-completed-problems">
                Completed: {numCompletedProblems} / {numProblems}
            </label>
        </div>
    );
}
 
export default NumCompletedProblems;