import './TitleInput.css';

const TitleInput = ({title, handleChangeTitle}) => {
    return (  
        <div className="title-input-container">
            <textarea 
                className="title-input"
                value={title}
                onChange={handleChangeTitle}
            />
        </div>
    );
}
 
export default TitleInput;