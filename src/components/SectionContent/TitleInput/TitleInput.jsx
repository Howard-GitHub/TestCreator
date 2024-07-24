import {useState} from 'react';
import './TitleInput.css';
import useLocalStoredText from '../../../hooks/useLocalStoredText';

const TitleInput = ({sectionId}) => {

    const [title, setTitle] = useState("");
    const {handleChangeTextarea} = useLocalStoredText(sectionId, "title", title, setTitle);

    return (  
        <div className="title-input-container">
            <textarea 
                className="title-input"
                value={title}
                onChange={handleChangeTextarea}
            />
        </div>
    );
}
 
export default TitleInput;