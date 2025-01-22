import React from "react";
import { useState } from "react";
import "./styles.css"

export default function PopUp ({TituloMsg, TextMsg }){    
    const [isVisible, setIsVisible] = useState(true);

    const fecharPopUp = () => {
        setIsVisible(false);
    };
      
    if (!isVisible) {
        return null;
    }

    TituloMsg = "Titulo Teste"
    TextMsg = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    return(
    <div className="PopUpPai">
        <div className="PopUpTitle">
            {TituloMsg}
        </div>
        <div className="PopUpMsg">
            {TextMsg}
        </div>
        <div className="BotaoVoltar">
            <button onClick={fecharPopUp} className="PopUpButton">
                Fechar
            </button>
        </div>
    </div>
    );

};
