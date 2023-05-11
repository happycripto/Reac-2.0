// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import { Navbar } from './components/Navbar/Navbar';
// import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import SixImages from './components/ImgContainer/ImgContainer';
// import CarouselFadeExample from './components/Carousel/Carousel';
// import Bienvenida from './components/Bienvenida/Bienvenida';
// import Contacto from './components/Contacto/Contacto';
// import { useParams } from 'react-router-dom';



// function App() {

//   const { categoryId } = useParams();
//   return (
//     <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/Masajes' element={<ItemListContainer/>} />
//         <Route path='/Faciales' element={<ItemListContainer category={categoryId} />} />
        
//         {/* <Route path='/Faciales' element={<ItemListContainer/>} /> */}
//         <Route path='/Inicio' element={<div><CarouselFadeExample/><Bienvenida /><SixImages /><Contacto/></div>} />
//         <Route path='/Contacto' element={<div><Bienvenida /><SixImages /><Contacto/></div>} />
//         <Route path='*' element={ <Navigate to={"/Inicio"} />}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SixImages from './components/ImgContainer/ImgContainer';
import CarouselFadeExample from './components/Carousel/Carousel';
import Bienvenida from './components/Bienvenida/Bienvenida';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Masajes' element={<ItemListContainer/>} />
        <Route path='/Faciales' element={<ItemListContainer category="Faciales" />} />
        <Route path='/Inicio' element={<div><CarouselFadeExample/><Bienvenida /><SixImages /><Contacto/></div>} />
        <Route path='/Contacto' element={<div><Bienvenida /><SixImages /><Contacto/></div>} />
        <Route path='*' element={ <Navigate to={"/Inicio"} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

