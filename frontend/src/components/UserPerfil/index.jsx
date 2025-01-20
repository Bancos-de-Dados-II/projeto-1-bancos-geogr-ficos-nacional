import "./styles.css"

export default function UserPerfil({ userName }) {
    return(
        <section className="userperfil-container">
            <img src="" alt="" />
            <p>{userName}</p>
            <img src="/icons/list.png" alt="menu" />
        </section>
    );
}