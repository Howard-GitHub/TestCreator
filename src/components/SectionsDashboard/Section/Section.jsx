import {useEffect, useState, useRef} from 'react';
import './Section.css';

const Section = ({id, sectionId, setSectionId, setSectionIsSelected, sectionTitle, selectedSectionRef, setSelectedSectionRef}) => {

    const [title, setTitle] = useState("");
    const sectionRef = useRef();

    const handleClickEnterSection = () => {
        setSectionId(id);
        setSectionIsSelected(true);
        if (selectedSectionRef) {
            selectedSectionRef.current.style.backgroundColor = "black";
        }
        sectionRef.current.style.backgroundColor = "darkslategray";
        setSelectedSectionRef(sectionRef);
    }

    useEffect(() => {
        const localKey = "title" + id;
        const locallyStoredText = localStorage.getItem(localKey);

        if (locallyStoredText) {
            setTitle(locallyStoredText);
        }
    }, [])

    useEffect(() => {
        if (id === sectionId) {
            setTitle(sectionTitle);
        }
    }, [sectionTitle])

    return (  
        <div className="section-container">
            <div 
                className="section"
                ref={sectionRef}
                onClick={handleClickEnterSection}
            >
                {title}
            </div>
        </div>
    );
}
 
export default Section;