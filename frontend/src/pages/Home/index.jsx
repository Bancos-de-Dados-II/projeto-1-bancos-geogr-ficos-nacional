import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import LeafLeatMap from "../../components/LeafleatMap";
import NavigationSection from "../../components/NaviagteSection";
import "./styles.css"

export default function Home() {

    //buscar em dados de sessão
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5055/redis/');
            const data = await response.json();
            console.log(data)
        }

        fetchData();
    }, [])

    return (
        <section className="home-container">
            <Header />
            <Hero />
            <LeafLeatMap />
            <NavigationSection />
            <Footer />
        </section>
    );
}