import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import "./styles.css"

export default function LeafletMap() {
  useEffect(() => {

    const map = Leaflet.map("map");

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //método que pega a localização do usuário
    map.locate({ setView: true, maxZoom: 16, watch: true, enableHighAccuracy: true });

    //quando a localização é encontrada, a setamos no mapa
    map.on("locationfound", (location) => {
      Leaflet.marker(location.latlng)
      .addTo(map)
      .bindPopup("Você")
      .openPopup();
    });

    map.on("locationerror", (err) => {
        console.log("Error ao buscar posição", err.message);
    })

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section>

        <div className="coment-session">
          <h2>Explore</h2>
          <p>Encontre locais e viva experiências inesquecíveis</p>
        </div>

        <div id="map"></div>
    </section>
  )
}
