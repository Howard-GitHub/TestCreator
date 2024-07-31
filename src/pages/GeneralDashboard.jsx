import {useState} from "react";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionsDashboard from "../components/SectionsDashboard/SectionsDashboard";
import './GeneralDashboard.css';
import useLocalStoredArray from "../hooks/useLocalStoredArray";

const GeneralDashboard = () => {
    const [sectionId, setSectionId] = useState(null);
    const [arrayOfSections, setArrayOfSections] = useState(null);
    const [sectionIsSelected, setSectionIsSelected] = useState(false);
    const [sectionTitle, setSectionTitle] = useState("");
    const [selectedSectionRef, setSelectedSectionRef] = useState(null);
    const {handleClickAddItem, handleClickRemoveItem} = useLocalStoredArray("sectionsDashboard", arrayOfSections, setArrayOfSections);
    
    return (  
        <div className="general-dashboard-container">
            <SectionsDashboard
                sectionId={sectionId}
                setSectionId={setSectionId}
                handleClickAddSection={handleClickAddItem}
                handleClickRemoveItem={handleClickRemoveItem}
                arrayOfSections={arrayOfSections}
                setArrayOfSections={setArrayOfSections}
                setSectionIsSelected={setSectionIsSelected}
                sectionTitle={sectionTitle}
                selectedSectionRef={selectedSectionRef}
                setSelectedSectionRef={setSelectedSectionRef}
            />
            <SectionContent
                sectionId={sectionId}
                handleClickRemoveSection={handleClickRemoveItem}
                sectionIsSelected={sectionIsSelected}
                setSectionIsSelected={setSectionIsSelected}
                sectionTitle={sectionTitle}
                setSectionTitle={setSectionTitle}
                setSelectedSectionRef={setSelectedSectionRef}
            />
        </div>
    );
}

export default GeneralDashboard;