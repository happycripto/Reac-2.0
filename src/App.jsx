import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SixImages from './components/ImgContainer/ImgContainer';
import CarouselFadeExample from './components/Carousel/Carousel';
import Bienvenida from './components/Bienvenida/Bienvenida';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Servicios" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/Inicio" element={<div><CarouselFadeExample/><Bienvenida /><SixImages /><Contacto/></div>} />
        <Route path="/Contacto" element={<div><Bienvenida /><SixImages /><Contacto/></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

