import AddButton from '../AddButton/AddButton';
import Section from './Section/Section.';
import './SectionsDashboard.css';

const SectionsDashboard = () => {
    return (  
        <div className="sections-dashboard-container">
            <div className="sections-dashboard">
                <AddButton
                    type={"section"}
                />
                <Section/>
            </div>
        </div>
    );
}
 
export default SectionsDashboard;