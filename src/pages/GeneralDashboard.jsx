import {useState} from "react";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionsDashboard from "../components/SectionsDashboard/SectionsDashboard";
import './GeneralDashboard.css';
import useLocalStoredArray from "../hooks/useLocalStoredArray";


const GeneralDashboard = () => {
    const [sectionId, setSectionId] = useState(null);
    const [arrayOfSections, setArrayOfSections] = useState(null);
    const {handleClickAddItem, handleClickRemoveItem} = useLocalStoredArray("sectionsDashboard", arrayOfSections, setArrayOfSections);
    
    return (  
        <div className="general-dashboard-container">
            <SectionsDashboard
                setSectionId={setSectionId}
                handleClickAddItem={handleClickAddItem}
                handleClickRemoveItem={handleClickRemoveItem}
                arrayOfSections={arrayOfSections}
                setArrayOfSections={setArrayOfSections}
            />
            <SectionContent
                sectionId={sectionId}
                handleClickRemoveItem={handleClickRemoveItem}
            />
        </div>
    );
}
 
export default GeneralDashboard;