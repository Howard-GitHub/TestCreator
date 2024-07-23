import './Section.css';

const Section = ({id, setSectionId}) => {

    const handleClickEnterSection = () => {
        setSectionId(id);
    }

    return (  
        <div className="section-container">
            <div 
                className="section"
                onClick={handleClickEnterSection}
            >
                {id}
            </div>
        </div>
    );
}
 
export default Section;