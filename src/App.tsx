import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import NavBar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

  return (
    <ShoppingCartProvider>
      <NavBar />
      <div className='container mb-4'>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App
