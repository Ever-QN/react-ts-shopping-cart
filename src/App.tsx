import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='container'>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App
