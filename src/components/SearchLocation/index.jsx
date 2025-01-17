import "./styles.css"

export default function SearchLocation() {
    return (
        <section className="searchlocation-container">
            <form action="GET" onSubmit={(event) => event.preventDefault()} >
                <div>
                    <input type="text" name="local" id="local" placeholder="Pesquisar locais"/>
                </div>
                <button type="submit">
                    <img src="/icons/search-icon.png" alt="buscar" />
                </button>
            </form>
        </section>
    );
}