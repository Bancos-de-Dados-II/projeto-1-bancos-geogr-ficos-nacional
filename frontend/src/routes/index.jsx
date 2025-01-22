import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Categorias from "./Categorias";
import Login from "../pages/Login";
import Categorias from "../pages/Categories";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Cultura from "../pages/Categoria/Cultura"
import Eventos from "../pages/Categoria/Eventos"
import Hoteis from "../pages/Categoria/Hoteis"
import Restaurantes from "../pages/Categoria/Restaurantes"


//telas ---

//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categorias />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/categories/cultura" element={<Cultura/>}/>
        <Route path="/categories/eventos" element={<Eventos/>}/>
        <Route path="/categories/hoteis" element={<Hoteis/>}/>
        <Route path="/categories/restaurantes" element={<Restaurantes/>}/>
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