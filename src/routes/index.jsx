import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
//telas ---


//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        {/*
        Exemplo de rota: path = caminho no componente Link e elemente é a página a ser exibida
        <Route path="/search" element={}/>*/}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

/*Exemplo de uso no componente 'Link':
<Link to={'/structure-and-machines'} >Estrutura e Equipamentos</Link>

to = equivale a path no componente 'Route'
*/