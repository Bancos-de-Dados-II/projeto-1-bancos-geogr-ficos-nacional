import React from "react";
import CardItem from "../../components/CardItem";
import "./styles.css"

function Eventos(){
    return(
        <div className="CategoriaPai">
            <div className="buttonBack">
            <a href="/categories">
                <img className="iconVoltar" src= "/icons/icon-arrow-back.png"></img>
            </a> 
        </div> 
        <div>
            <CardItem Categoria="Eventos" imgItem="/images/imgTeatro.png" nomeItem="Nome do Evento" descricaoItem="Fundado no dia 26 de janeiro de 1985,  o centro carrega esse nome em homenagem a  
                        Íracles Brocos Pires (apelidada de Ica). Ela foi durante a década de 70, a principal referência do movimento cultural de Cajazeiras." horario="19:00" contatos="995432431" />
        </div> 
        </div>
          
    
    )
}
export default Eventos;