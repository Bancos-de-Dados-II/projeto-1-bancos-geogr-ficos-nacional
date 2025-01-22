import React from "react";
import Header from "../../components/Header";
import CardNavigateSection from "../../components/CardNavigateSection";
import "./styles.css"
import Footer from "../../components/Footer";
import CardItemExplore from "../../components/CardItemExplore";

function Explorar(){
    return(
        <div className="ExplorarPaginaPrincipal">
            <Header />
            <div className="ExplorarConteudo">
                <div className="ExplorarTitle">
                    <h2>Nossas sugestões</h2>
                </div>
                <div className="ExplorarContent">
                    <div className="ExplorarSetaEsquerda">
                        <a>
                            <img src = "/icons/left-arrow.png"/>
                        </a>
                    </div>
                    <div className="ExplorarCards">
                    <CardItemExplore
                        imagePath="/images/imagem-teatro.png"
                        title="Teatro"
                        description="adafafafafwAEFWEGWa ckj s\djvswrvnrwnRJV   wjbvuwBRUIV  wbruigvbUIWB  W H Wrubuib ui I VRigbUIB IUiug iu "
                    />
                    </div>
                    <div className="ExplorarSetaDireita">
                        <a>
                            <img src = "/icons/right-arrow.png"/>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        
        </div>
        
    )
    
}
export default Explorar;