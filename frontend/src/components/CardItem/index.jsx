import React from "react";
import "./styles.css"

export default function CardItem({Categoria, imgItem, nomeItem, descricaoItem, horario, contatos }) {
    return(
        <div className="Categoria-page">
            <div className="Categoria-card">
                <div className="Categoria-title">
                    <h2>{Categoria}</h2>
                </div>
                <div className="Categoria-imgEText">
                    <div className="Categoria-Img">
                        <img className="ImgCultura" src ={imgItem}></img>
                    </div>
                    <div className="Categoria-Text">
                        <div className="Categoria-subtitle">
                            <h4>{nomeItem}</h4>
                        </div>
                        <div className="Categoria-description"> {descricaoItem}</div>
                        <div className="Categoria-categoria">Categoria:{Categoria}</div>
                        <div className="Categoria-horario">Horario de funcionamento: {horario} </div>
                        <div className="Categoria-contatos">Contatos: {contatos}</div>
                    </div>
                </div>
            </div>
            <div className="Categoria-buttonMap">
                <div className="Categoria-buttonContainer">
                    <img className="Categoria-img-button" src={"/icons/iconLocal.png"}>

                    </img>
                    <button className="Categoria-button">Ver mapa</button>
                </div>
                
            </div>
        </div>
    );
    
};