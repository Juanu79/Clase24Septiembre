import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Importación de las páginas
import Detalle from './Paginas/Detalle'
import Favoritos from './Paginas/favoritos'
import Home from './Paginas/Home'
import Informativa from './Paginas/informativa'
import Mapa from './Paginas/Mapa'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* Menú de navegación */}
      <nav className="c-menu">
        <Link to="/">Home</Link>
        <Link to="/informativa">Informativa</Link>
        {/* aquí ya con parámetros para que useParams funcione */}
        <Link to="/detalle/antioquia/05001">Detalle Medellín</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/mapa">Mapa</Link>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/informativa" element={<Informativa />} />
        {/* ruta con parámetros dinámicos */}
        <Route path="/detalle/:depto/:municipio" element={<Detalle />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
