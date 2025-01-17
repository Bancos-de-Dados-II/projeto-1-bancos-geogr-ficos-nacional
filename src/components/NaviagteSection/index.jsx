import CardNavigateSection from "../CardNavigateSection";
import "./styles.css"
import { Link } from "react-router-dom"

export default function NavigationSection() {
    return (
        <section className="navigationsection-container">
            <div className="title-navigatesection">
                <h2>Navegue pelo nosso site</h2>
                <p>Descubra as funções que te oferecemos</p>
            </div>

            <div className="other-functions-contaner">
                <Link to={"/"}>
                    <CardNavigateSection iconPath={"/icons/pin-map.png"} title={"LOCAIS PRÓXIMOS"} description={"Encontre os melhores locais próximos a você"}/>
                </Link>
                <Link to={"/"}>
                    <CardNavigateSection iconPath={"/icons/compass.png"} title={"EXPLORAR"} description={"Descubra, pesquise e analise lugares que você tem em mente"}/>
                </Link>
                <Link to={"/"}>
                    <CardNavigateSection iconPath={"/icons/list-task.png"} title={"CATEGORIAS"} description={"Explore locais com base em categorias pré-definidas, como : hotel, restaurante ou parques"}/>
                </Link>
            </div>
        </section>
    );
}