import {useState} from 'react';
import ProblemInput from './ProblemInput/ProblemInput';
import './SectionContent.css'
import TitleInput from './TitleInput/TitleInput';

const SectionContent = () => {
    const [problemInput, setProblemInput] = useState([]);
    const [title, setTitle] = useState(null);

    return (  
        <div className="section-content-container">
            <TitleInput
                title={title}
            />
            <div className="section-content">
                {problemInput.map((problemInput) => {
                    <ProblemInput
                        key={problemInput.id}
                        id={problemInput.id}
                    />
                })}
                <ProblemInput/>
                <ProblemInput/>
                <ProblemInput/>
                <ProblemInput/>
                <ProblemInput/>
                <ProblemInput/>

            </div>
            <div className="resize-line"/>
        </div>
    );
}
 
export default SectionContent;