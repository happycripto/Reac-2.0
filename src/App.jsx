import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { CartProvider } from './context/CartContext';
import AppRouter from './router/AppRouter';


function App() {

  return (
      
    <div className="app-container"> 
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </div>
    
  );
}

export default App;
