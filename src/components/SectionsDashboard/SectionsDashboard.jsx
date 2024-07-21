import {useState} from 'react';
import AddButton from '../AddButton/AddButton';
import Section from './Section/Section.';
import './SectionsDashboard.css';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';

const SectionsDashboard = () => {
    const [arrayOfSections, setArrayOfSections] = useState([]);
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
                        {arrayOfSections.map((section) => (
                            <Section
                                key={section.id}
                                id={section.id}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
 
export default SectionsDashboard;