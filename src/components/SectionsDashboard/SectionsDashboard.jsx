import {useState} from 'react';
import AddButton from '../AddButton/AddButton';
import Section from './Section/Section';
import './SectionsDashboard.css';

const SectionsDashboard = ({sectionId, setSectionId, handleClickAddSection, arrayOfSections, setSectionIsSelected, sectionTitle,
                            selectedSectionRef, setSelectedSectionRef}) => {

    return (  
        <div className="sections-dashboard-container">
            <div className="sections-dashboard">
                <AddButton
                    type={"section"}
                    handleClickAddItem={handleClickAddSection}
                />
            <div className="sections-dashboard__sections-container">
                <div className="sections-dashboard__sections-container__gap"/>
                    {(arrayOfSections !== null) &&
                        arrayOfSections.map((section) => (
                            <Section
                                key={section.id}
                                id={section.id}
                                sectionId={sectionId}
                                setSectionId={setSectionId}
                                setSectionIsSelected={setSectionIsSelected}
                                sectionTitle={sectionTitle}
                                selectedSectionRef={selectedSectionRef}
                                setSelectedSectionRef={setSelectedSectionRef}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default SectionsDashboard;