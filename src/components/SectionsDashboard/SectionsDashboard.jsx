import {useState} from 'react';
import AddButton from '../AddButton/AddButton';
import Section from './Section/Section.';
import {v4 as uuidv4} from 'uuid';
import './SectionsDashboard.css';

const SectionsDashboard = () => {
    const [arrayOfSections, setArrayOfSections] = useState([]);

    const handleOnClickAddItem = () => {
        const uniqueIdentifier = {
            id: uuidv4()
        };

        setArrayOfSections([...arrayOfSections, uniqueIdentifier]);
    }

    return (  
        <div className="sections-dashboard-container">
            <div className="sections-dashboard">
                <AddButton
                    type={"section"}
                    handleOnClickAddItem={handleOnClickAddItem}
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