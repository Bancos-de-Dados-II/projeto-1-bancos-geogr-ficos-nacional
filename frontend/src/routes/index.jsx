import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Categorias from "./Categorias";
import Login from "../pages/Login";
import Categorias from "../pages/Categories";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import PopUp from "../components/PopUp"
//telas ---

//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
   
        <Route path="/" element={<Login />}
        <Route path="/PopUp" element={<PopUp/>}/>
        <Route path="/categories" element={<Categorias />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/*
        Exemplo de rota: path = caminho no componente Link e elemente é a página a ser exibida
        <Route path="/search" element={}/>*/}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

/*Exemplo de uso no componente 'Link':
<Link to={'/structure-and-machines'} >Estrutura e Equipamentos</Link>

to = equivale a path no componente 'Route'
*/