import "./styles.css"

export default function HeaderButton({ imgPath, text }) {
    return (
        <div className="header-button-container">
            <img src={imgPath} alt="icon" />
            <p>{text}</p>
        </div>
    );
}