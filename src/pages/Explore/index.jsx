import React from "react";
import Header from "../../components/Header";
import CardNavigateSection from "../../components/CardNavigateSection";
import "./styles.css"
import Footer from "../../components/Footer";

function Explorar(){
    return(
        <div className="ExplorarPaginaPrincipal">
            <Header />
            <div className="ExplorarConteudo">
                {/* trocar por card especifico de conteudo */}
                <div className="ExplorarCards">
                <CardNavigateSection
                    iconPath="/images/imagem-teatro.png"
                    title="Teatro"
                    description="adafafafafwAEFWEGWa ckj s\djvswrvnrwnRJV   wjbvuwBRUIV  wbruigvbUIWB  W H Wrubuib ui I VRigbUIB IUiug iu "
                />
                </div>
            </div>
            <Footer />
        
        </div>
        
    )
    
}
export default Explorar;