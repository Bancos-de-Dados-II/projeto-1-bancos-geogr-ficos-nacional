import Header from "../../components/Header";
import Hero from "../../components/Hero";
import LeafLeatMap from "../../components/LeafleatMap";
import NavigationSection from "../../components/NaviagteSection";
import "./styles.css"

export default function Home() {
    return (
        <section className="home-container">
            <Header />
            <Hero />
            <LeafLeatMap />
            <NavigationSection />
        </section>
    );
}