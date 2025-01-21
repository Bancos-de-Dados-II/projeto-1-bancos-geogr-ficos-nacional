import "./styles.css"

export default function CardNavigateSection( {iconPath, title, description} ) {
    return (
        <section className="cardnavigation-container">
            <img src={iconPath} alt="icon" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
    );
}