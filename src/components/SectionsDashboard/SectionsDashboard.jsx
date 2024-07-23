import {useState} from 'react';
import AddButton from '../AddButton/AddButton';
import Section from './Section/Section';
import './SectionsDashboard.css';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';

const SectionsDashboard = ({setSectionId}) => {
    const [arrayOfSections, setArrayOfSections] = useState(null);
    const {handleClickAddItem} = useLocalStoredArray("sectionsDashboard", arrayOfSections, setArrayOfSections);

    return (  
        <div className="sections-dashboard-container">
            <div className="sections-dashboard">
                <AddButton
                    type={"section"}
                    handleClickAddItem={handleClickAddItem}
                />
                <div className="sections-dashboard__sections-container">
                    <div className="sections-dashboard__sections-container__gap"/>
                        {(arrayOfSections !== null) &&
                            arrayOfSections.map((section) => (
                                <Section
                                    key={section.id}
                                    id={section.id}
                                    setSectionId={setSectionId}
                                />
                        ))}
                </div>
            </div>
        </div>
    );
}
 
export default SectionsDashboard;