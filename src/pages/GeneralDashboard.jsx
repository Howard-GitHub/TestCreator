import SectionContent from "../components/SectionContent/SectionContent";
import SectionsDashboard from "../components/SectionsDashboard/SectionsDashboard";
import './GeneralDashboard.css';

const GeneralDashboard = () => {
    return (  
        <div className="general-dashboard-container">
            <SectionsDashboard/>
            <SectionContent/>
        </div>
    );
}
 
export default GeneralDashboard;