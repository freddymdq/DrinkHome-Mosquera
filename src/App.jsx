


import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Oferta from './Components/ItemListContainer/Ofertas';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Oferta text="HASTA UN 40% OFF" text2="EN TODAS LAS MARCAS"/>
      <Routes>
        <Route  path='/' element={ <ItemListContainer /> } />
        <Route  path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/> } />
        <Route path='*' element={ <Navigate to='/' /> } />
      </Routes>
        <Footer />
      </BrowserRouter>
 
  );
}

export default App; 
