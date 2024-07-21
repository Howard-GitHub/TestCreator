import AddButton from '../AddButton/AddButton';
import './SectionsDashboard.css';

const SectionsDashboard = () => {
    return (  
        <div className="sections-dashboard-container">
            <div className="sections-dashboard">
                <AddButton
                    type={"section"}
                />

            </div>
        </div>
    );
}
 
export default SectionsDashboard;