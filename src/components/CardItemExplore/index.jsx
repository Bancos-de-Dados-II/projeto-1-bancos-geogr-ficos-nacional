import "./styles.css"

export default function CardItemExplore( {imagePath, title, description} ) {
    return (
        <section className="cardnavigation-container">
            <img src={imagePath} alt="icon" />
            <div className="textContent">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
    );
}