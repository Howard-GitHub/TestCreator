import {useState} from 'react';
import ProblemInput from './ProblemInput/ProblemInput';
import './SectionContent.css'
import TitleInput from './TitleInput/TitleInput';
import AddButton from '../AddButton/AddButton';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';
import RemoveButton from '../RemoveButton/RemoveButton';
import TestButton from './TestButton/TestButton';

const SectionContent = ({sectionId, handleClickRemoveSection, sectionIsSelected, setSectionIsSelected, sectionTitle, setSectionTitle, setSelectedSectionRef}) => {
    const [arrayOfProblemInputs, setArrayOfProblemInputs] = useState(null);
    const {handleClickAddItem, handleClickRemoveItem} = useLocalStoredArray(sectionId, arrayOfProblemInputs, setArrayOfProblemInputs);

    return (  
        <div className="section-content-container">
            <TitleInput
                sectionId={sectionId}
                sectionTitle={sectionTitle}
                setSectionTitle={setSectionTitle}
            />
            <TestButton
                arrayOfProblems={arrayOfProblemInputs}
            />
            {(sectionIsSelected) ? (
                <>
                    <RemoveButton
                        type={"section"}
                        handleClickRemoveItem={handleClickRemoveSection}
                        setArrayOfProblemInputs={setArrayOfProblemInputs}
                        setSectionIsSelected={setSectionIsSelected}
                        id={sectionId}
                        setSectionTitle={setSectionTitle}
                        setSelectedSectionRef={setSelectedSectionRef}
                    />
                    <AddButton
                        type={"problem"}
                        handleClickAddItem={handleClickAddItem}
                    />
                    <div className="section-content">
                        {(arrayOfProblemInputs !== null) &&
                            arrayOfProblemInputs.map((problemInput) => (
                                ((problemInput !== undefined) && (problemInput !== null)) && (
                                    <ProblemInput
                                        key={problemInput.id}
                                        problemInputId={problemInput.id}
                                        handleClickRemoveProblemInput={handleClickRemoveItem}
                                    />
                                )
                            ))
                        }
                    </div>
                </>
            ) : (
                <div className="choose-section-page">
                    Choose a Section
                </div>
            )}
            <div className="resize-line"/>
        </div>
    );
}
 
export default SectionContent;