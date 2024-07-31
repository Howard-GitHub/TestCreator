import {useEffect, useState} from 'react';
import './Section.css';

const Section = ({id, sectionId, setSectionId, setSectionIsSelected, sectionTitle}) => {

    const [title, setTitle] = useState("");

    const handleClickEnterSection = () => {
        setSectionId(id);
        setSectionIsSelected(true);
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
                onClick={handleClickEnterSection}
            >
                {title}
            </div>
        </div>
    );
}
 
export default Section;