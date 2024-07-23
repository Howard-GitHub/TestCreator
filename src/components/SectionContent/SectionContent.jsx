import {useState, useEffect} from 'react';
import ProblemInput from './ProblemInput/ProblemInput';
import './SectionContent.css'
import TitleInput from './TitleInput/TitleInput';
import AddButton from '../AddButton/AddButton';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';


const SectionContent = ({sectionId}) => {
    const [arrayOfProblemInputs, setArrayOfProblemInputs] = useState([]);
    const [title, setTitle] = useState(null);
    const {handleClickAddItem} = useLocalStoredArray(sectionId, arrayOfProblemInputs, setArrayOfProblemInputs);

    useEffect(() => {
        console.log("use effect", arrayOfProblemInputs);
    }, [arrayOfProblemInputs])


    return (  
        <div className="section-content-container">
            <TitleInput
                title={title}
            />
            <AddButton
                type={"problem"}
                handleClickAddItem={handleClickAddItem}
            />
            <div className="section-content">
                {arrayOfProblemInputs.map((problemInput) => (
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