import {useEffect, useState, useRef} from 'react';
import './Section.css';
import {handleClickEnterSection} from '../../../utils/SectionUtils';

const Section = ({id, sectionId, setSectionId, setSectionIsSelected, sectionTitle, selectedSectionRef, setSelectedSectionRef}) => {

    const [title, setTitle] = useState("");
    const sectionRef = useRef(null);

    // Retrieves the title from the local storage
    useEffect(() => {
        const localKey = "title" + id;
        const locallyStoredText = localStorage.getItem(localKey);

        if (locallyStoredText) {
            setTitle(locallyStoredText);
        }
    }, [])

    // Changes the title of the section if the user edits the title input
    useEffect(() => {
        if (id === sectionId) {
            setTitle(sectionTitle);
        }
    }, [sectionTitle])

    
    useEffect(() => {
        if (id === sectionId) {
            sectionRef.current.style.backgroundColor = 'darkslategray';
            setSelectedSectionRef(sectionRef);
        }
    }, [])

    return (  
        <div className="section-container">
            <div 
                className="section"
                ref={sectionRef}
                onClick={() => handleClickEnterSection(id, setSectionId, setSectionIsSelected, sectionRef, selectedSectionRef, setSelectedSectionRef)}
            >
                {title}
            </div>
        </div>
    );
}
 
export default Section;