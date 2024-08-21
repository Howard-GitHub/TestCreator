import './TitleInput.css';
import useLocalStoredText from '../../../hooks/useLocalStoredText';
import {handleKeyDownEnter} from '../../../utils/SectionUtils';

const TitleInput = ({sectionId, sectionTitle, setSectionTitle}) => {

    const {handleChangeTextarea} = useLocalStoredText(sectionId, "title", sectionTitle, setSectionTitle);

    return (  
        <div className="title-input-container">
            <textarea 
                className="title-input"
                value={sectionTitle}
                onChange={handleChangeTextarea}
                onKeyDown={(event) => handleKeyDownEnter(event)}
            />
        </div>
    );
}
 
export default TitleInput;