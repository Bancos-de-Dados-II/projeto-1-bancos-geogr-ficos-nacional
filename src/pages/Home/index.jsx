import Header from "../../components/Header";
import Hero from "../../components/Hero";
import LeafLeatMap from "../../components/LeafleatMap";
import "./styles.css"

export default function Home() {
    return (
        <section className="home-container">
            <Header />
            <Hero />
            <LeafLeatMap />
        </section>
    );
}