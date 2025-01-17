import React from "react";
import "../assets/styles/Categorias.css";

import hotelIcon from "../assets/icons/mingcute_hotel-fill.png";
import restaurantIcon from "../assets/icons/ion_restaurant.png";
import cultureIcon from "../assets/icons/maki_museum.png";
import eventIcon from "../assets/icons/mdi_events-check.png";

const categorias = [
  { id: 1, nome: "Hotéis", icone:hotelIcon},
  { id: 2, nome: "Restaurantes", icone:restaurantIcon  },
  { id: 3, nome: "Cultura", icone : cultureIcon},
  { id: 4, nome: "Eventos",icone : eventIcon },
];

function Categorias() {
  return (
    <div className="categorias">
    
      <main className="categorias-main">
        <h1>Explorar por categorias</h1>
        <div className="categorias-grid">
          {categorias.map((categoria) => (
            <div id={categoria.id} className="categoria-card">
            
                <div className="card">
                    <img src={categoria.icone} alt={categoria.nome} className="icone-categoria"/>
                </div>
                <span className="nome-categoria">{categoria.nome}</span>
            </div>
             
          ))}
         
        </div>
      </main>
    </div>
  );
}

export default Categorias;
