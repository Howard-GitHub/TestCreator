import {useState, useEffect} from "react";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionsDashboard from "../components/SectionsDashboard/SectionsDashboard";
import './GeneralDashboard.css';

const GeneralDashboard = () => {
    const [sectionId, setSectionId] = useState(null);

    useEffect(() => {
        console.log(sectionId);
    }, [sectionId])

    return (  
        <div className="general-dashboard-container">
            <SectionsDashboard
                setSectionId={setSectionId}
            />
            <SectionContent
                sectionId={sectionId}
            />
        </div>
    );
}
 
export default GeneralDashboard;