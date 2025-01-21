import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Categorias from "./Categorias";
import Login from "../pages/Login";
import Categorias from "../pages/Categories";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Explore from "../pages/Explore";
//telas ---

//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categorias />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/explore" element={<Explore />} />
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