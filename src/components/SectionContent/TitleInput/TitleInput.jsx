import './TitleInput.css';
import useLocalStoredText from '../../../hooks/useLocalStoredText';

const TitleInput = ({sectionId, sectionTitle, setSectionTitle}) => {

    const {handleChangeTextarea} = useLocalStoredText(sectionId, "title", sectionTitle, setSectionTitle);

    return (  
        <div className="title-input-container">
            <textarea 
                className="title-input"
                value={sectionTitle}
                onChange={handleChangeTextarea}
            />
        </div>
    );
}
 
export default TitleInput;