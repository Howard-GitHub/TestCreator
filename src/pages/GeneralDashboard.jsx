import {useEffect, useState} from "react";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionsDashboard from "../components/SectionsDashboard/SectionsDashboard";
import './GeneralDashboard.css';
import useLocalStoredArray from "../hooks/useLocalStoredArray";

const GeneralDashboard = ({setArrayOfProblems, sectionId, setSectionId, sectionIsSelected, setSectionIsSelected, selectedSectionRef, setSelectedSectionRef}) => {
    const [arrayOfSections, setArrayOfSections] = useState(null);
    const [sectionTitle, setSectionTitle] = useState("");
    const {handleClickAddItem, handleClickRemoveItem} = useLocalStoredArray("sectionsDashboard", arrayOfSections, setArrayOfSections);

    return (  
        <div className="general-dashboard-container">
            <SectionsDashboard
                sectionId={sectionId}
                setSectionId={setSectionId}
                handleClickAddSection={handleClickAddItem}
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
                setArrayOfProblems={setArrayOfProblems}
            />
        </div>
    );
}

export default GeneralDashboard;