import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"

export default function UserPerfil() {

    const [userName, setUserName] = useState("");
    const [userCard, setUserCard] = useState(true);

    //ativando menu do usuário
    const handleMenuClicked = () => {
        setUserCard(!userCard);
    }

    //removendo os dados de sessão
    const handleLogOutClick = async () => {
        const request = new Request('http://localhost:5055/redis', {
            method: 'DELETE'
        })

        await fetch(request);
    }

    useEffect(() => {
        const loadData = async () => {
            //buscando dados no redis
            const request = new Request("http://localhost:5055/redis");

            const response = await fetch(request);
            const jsonResponse = await response.json();

            const name = jsonResponse.name;

            if (name != null) {
                setUserName(name);
            } else {
                //não está logado
                window.location.href = "/";
                alert("Você não está logado!");
            }
        }
        
        loadData();
    }, [setUserName]);

    return(
        <section className="profile-container" >
            <div className="userperfil-container">
                <img src="" alt="" />
                <p>{userName}</p>
                <img onClick={handleMenuClicked} className="hamburguer-menu" src="/icons/list.png" alt="menu" />
            </div>

            <div className={`options-menu-user ${userCard ? `display-on`: ``}`}>
                <Link onClick={handleLogOutClick} to={"/"}>Sair</Link>
            </div>
        </section>
    );
}