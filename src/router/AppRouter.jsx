import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import LoginScreen from '../components/LoginScreen/LoginScreen';
// import RegisterScreen from '../components/LoginScreen/RegisterScreen';
import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import Checkout from "../components/Checkout/Checkout";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from '../components/Navbar/Navbar';
import SixImages from '../components/ImgContainer/ImgContainer';
import CarouselFadeExample from '../components/Carousel/Carousel';
import Bienvenida from '../components/Bienvenida/Bienvenida';
import Contacto from '../components/Contacto/Contacto';
import { CartProvider } from '../context/CartContext';
import Cart from '../components/Cart/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';



const AppRouter = () => {
    // const { user } = useContext(AuthContext)

    return (
        // <BrowserRouter>
        //     {
        //         user.logged
        //         ? <>
        //             <Navbar />
        //             {/* rutas privadas */}
        //             <Routes>
        //                 <Route path='/' element={ <ItemListContainer /> } />
        //                 <Route path='/productos/:categoryId' element={ <ItemListContainer />} />
        //                 <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
        //                 <Route path='/cart' element={ <Cart/> }/>
        //                 <Route path='/checkout' element={ <Checkout/> }/>
        //                 <Route path='*' element={ <Navigate to={"/"} /> }/>
        //             </Routes>
        //         </>
        //         : <Routes>
        //             {/* rutas públicas */}
        //             <Route path='/login' element={<LoginScreen/>}/>
        //             <Route path='/register' element={<RegisterScreen/>}/>
        //             <Route path='*' element={ <Navigate to="/login"/>}/>
        //         </Routes>
        //     }
        // </BrowserRouter>

        <BrowserRouter>
        
            <CartProvider>
                <Navbar/>
                <Routes>
                <Route path="/Servicios" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/Inicio" element={<div><CarouselFadeExample/><Bienvenida /><SixImages /><Contacto/></div>} />
                <Route path="/Contacto" element={<div><Bienvenida /><SixImages /><Contacto/></div>} />
                <Route path='/Cart' element={ <Cart/> }/>
                <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
                <Route path='/checkout' element={ <Checkout/> }/>
                <Route path='*' element={ <Navigate to={"/Inicio"} /> }/>

                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default AppRouter