import {useState} from 'react';
import ProblemInput from './ProblemInput/ProblemInput';
import './SectionContent.css'
import TitleInput from './TitleInput/TitleInput';
import AddButton from '../AddButton/AddButton';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';
import RemoveButton from '../RemoveButton/RemoveButton';


const SectionContent = ({sectionId}) => {
    const [arrayOfProblemInputs, setArrayOfProblemInputs] = useState(null);
    const [title, setTitle] = useState(null);
    const {handleClickAddItem} = useLocalStoredArray(sectionId, arrayOfProblemInputs, setArrayOfProblemInputs);

    return (  
        <div className="section-content-container">
            <TitleInput
                title={title}
            />
            <RemoveButton/>

            <AddButton
                type={"problem"}
                handleClickAddItem={handleClickAddItem}
            />
            <div className="section-content">
                {(arrayOfProblemInputs !== null) &&
                    arrayOfProblemInputs.map((problemInput) => (
                        <ProblemInput
                            key={problemInput.id}
                            id={problemInput.id}
                        />
                ))}
            </div>
            <div className="resize-line"/>
        </div>
    );
}
 
export default SectionContent;