import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from "./Paginas/home";
import Favoritos from "./Paginas/favoritos";
import Mapa from "./Paginas/mapa";
import Informativa from "./Paginas/informativa";
import Detalle from "./Paginas/detalle";
import { AppProvider } from './Paginas/contexto';

function App() {

  return (
    <>
    <AppProvider>
      <Router>

          <nav className="c-menu">
            <Link to="/">Home</Link>
            <Link to="/informativa">Informativa</Link>
            <Link to="/mapa">Mapa</Link>
            <Link to="/favoritos">Favoritos</Link>
          </nav>


        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/informativa" element={<Informativa /> } />
            <Route path="/mapa" element={<Mapa /> } />
            <Route path="/favoritos" element={<Favoritos /> } />
            <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
        </Routes>
      </Router>
    </AppProvider>
    </>
  )
}

export default App