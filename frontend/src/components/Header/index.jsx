import HeaderButton from "../HeaderButton"
import UserPerfil from "../UserPerfil"
import "./styles.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header-container">

            <div className="header-top">
                <img src="/images/find-logo.png" alt="logo-find"/>

                <UserPerfil userName={"caua-3301"}/>
            </div>

            <nav className="header-nav-container">
                <Link to={"/"} >
                    <HeaderButton imgPath={"/icons/pin-map.png"} text={"Locais próximos"} />
                </Link>
                <Link to={"/"} >
                    <HeaderButton imgPath={"/icons/compass.png"} text={"Explorar"} />
                </Link>
                <Link to={"/categories"} >
                    <HeaderButton imgPath={"/icons/list-task.png"} text={"Categorias"} />
                </Link>
            </nav>

        </header>
    )
}