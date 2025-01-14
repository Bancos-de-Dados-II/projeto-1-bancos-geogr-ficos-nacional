import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categorias from "./Categorias";
//telas ---


//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categorias />} />
        {/*
        Exemplo de rota: path = caminho no componente Link e elemente é a página a ser exibida
        <Route path="/search" element={}/>*/}
      </Routes>
    </Router>
  );
}

/*Exemplo de uso no componente 'Link':
<Link to={'/structure-and-machines'} >Estrutura e Equipamentos</Link>

to = equivale a path no componente 'Route'
*/