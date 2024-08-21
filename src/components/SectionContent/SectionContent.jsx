import {useEffect, useRef, useState} from 'react';
import ProblemInput from './ProblemInput/ProblemInput';
import './SectionContent.css'
import TitleInput from './TitleInput/TitleInput';
import AddButton from '../AddButton/AddButton';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';
import RemoveButton from '../RemoveButton/RemoveButton';
import TestButton from './TestButton/TestButton';
import ErrorMessageTab from './ErrorMessageTab/ErrorMessageTab';

const SectionContent = ({sectionId, handleClickRemoveSection, sectionIsSelected, setSectionIsSelected, sectionTitle, setSectionTitle, 
                        setSelectedSectionRef, setArrayOfProblems}) => {
    const [arrayOfProblemInputs, setArrayOfProblemInputs] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [notEnoughProblems, setNotEnoughProblems] = useState(false);
    const errorMessageTabRef = useRef(null);
    const {handleClickAddItem, handleClickRemoveItem} = useLocalStoredArray(sectionId, arrayOfProblemInputs, setArrayOfProblemInputs);

    useEffect(() => {
        if (showErrorMessage && errorMessageTabRef.current) {
            const errorMessageTimer = setTimeout(() => {
                setShowErrorMessage(false);
            }, 4500);

            return () => {
                clearTimeout(errorMessageTimer);
            } 
        }
    }, [showErrorMessage])

    return (  
        <div className="section-content-container">
            <TitleInput
                sectionId={sectionId}
                sectionTitle={sectionTitle}
                setSectionTitle={setSectionTitle}
            />
            {(sectionIsSelected) ? (
                <>
                    <TestButton
                        arrayOfProblems={arrayOfProblemInputs}
                        setArrayOfProblems={setArrayOfProblems}
                        setShowErrorMessage={setShowErrorMessage}
                        setNotEnoughProblems={setNotEnoughProblems}
                    />
                    <RemoveButton
                        type={"section"}
                        handleClickRemoveItem={handleClickRemoveSection}
                        setArrayOfProblemInputs={setArrayOfProblemInputs}
                        setSectionIsSelected={setSectionIsSelected}
                        setSectionTitle={setSectionTitle}
                        setSelectedSectionRef={setSelectedSectionRef}
                        arrayOfProblemInputs={arrayOfProblemInputs}
                        id={sectionId}
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
            {(showErrorMessage) && (
                <ErrorMessageTab
                    errorMessageTabRef={errorMessageTabRef}
                    notEnoughProblems={notEnoughProblems}
                />
            )}
        </div>
    );
}
 
export default SectionContent;