import TermsDashboard from "../components/TermsDashboard/TermsDashboard";
import SectionsDashboard from "../components/SectionsDashboard/SectionsDashboard";
import './GeneralDashboard.css';

const GeneralDashboard = () => {
    return (  
        <div className="general-dashboard-container">
            <SectionsDashboard/>
            <TermsDashboard/>
        </div>
    );
}
 
export default GeneralDashboard;