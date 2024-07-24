import './Section.css';

const Section = ({id, setSectionId, setSectionIsSelected}) => {

    const handleClickEnterSection = () => {
        setSectionId(id);
        setSectionIsSelected(true);
    }

    return (  
        <div className="section-container">
            <div 
                className="section"
                onClick={handleClickEnterSection}
            >
                section
            </div>
        </div>
    );
}
 
export default Section;