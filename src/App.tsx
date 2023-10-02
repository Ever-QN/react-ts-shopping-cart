import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import NavBar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Cart from './pages/Cart';

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </ShoppingCartProvider>
  );
}

export default App
