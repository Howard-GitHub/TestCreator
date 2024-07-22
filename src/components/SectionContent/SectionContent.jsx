import ProblemInput from './ProblemInput/ProblemInput';
import './SectionContent.css'

const SectionContent = () => {
    return (  
        <div className="section-content-container">
            <div className="section-content">
                <ProblemInput/>
            </div>
            <div className="resize-line"/>
        </div>
    );
}
 
export default SectionContent;