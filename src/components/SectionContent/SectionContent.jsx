import {useState} from 'react';
import ProblemInput from './ProblemInput/ProblemInput';
import './SectionContent.css'
import TitleInput from './TitleInput/TitleInput';
import AddButton from '../AddButton/AddButton';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';
import RemoveButton from '../RemoveButton/RemoveButton';

const SectionContent = ({sectionId, handleClickRemoveSection, sectionIsSelected, setSectionIsSelected}) => {
    const [arrayOfProblemInputs, setArrayOfProblemInputs] = useState(null);
    const {handleClickAddItem, handleClickRemoveItem} = useLocalStoredArray(sectionId, arrayOfProblemInputs, setArrayOfProblemInputs);

    return (  
        <div className="section-content-container">
            {(sectionIsSelected) ? (
                <>
                    <TitleInput
                        sectionId={sectionId}
                    />
                    <RemoveButton
                        type={"section"}
                        handleClickRemoveItem={handleClickRemoveSection}
                        setArrayOfProblemInputs={setArrayOfProblemInputs}
                        setSectionIsSelected={setSectionIsSelected}
                        id={sectionId}
                    />
                    <AddButton
                        type={"problem"}
                        handleClickAddItem={handleClickAddItem}
                    />
                    <div className="section-content">
                        {(arrayOfProblemInputs !== null) &&
                            arrayOfProblemInputs.map((problemInput) => (
                                <ProblemInput
                                    key={problemInput.id}
                                    problemInputId={problemInput.id}
                                    handleClickRemoveProblemInput={handleClickRemoveItem}
                                />
                        ))}
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