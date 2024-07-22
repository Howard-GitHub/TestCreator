import './TitleInput.css';

const TitleInput = ({title}) => {
    return (  
        <div className="title-input-container">
            <textarea 
                className="title-input"
                value={title}
            />
        </div>
    );
}
 
export default TitleInput;