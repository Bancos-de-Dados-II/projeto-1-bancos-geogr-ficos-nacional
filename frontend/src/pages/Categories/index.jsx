import React from "react";
import "./styles.css";

const categorias = [
  { id: 1, nome: "Hotéis", icone: "/icons/mingcute_hotel-fill.png"},
  { id: 2, nome: "Restaurantes", icone:"/icons/ion_restaurant.png"},
  { id: 3, nome: "Cultura", icone : "/icons/maki_museum.png"},
  { id: 4, nome: "Eventos",icone : "/icons/mdi_events-check.png"},
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
