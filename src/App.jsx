


import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Oferta from './Components/ItemListContainer/Ofertas';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';



function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Oferta text="HASTA UN 40% OFF" text2="EN TODAS LAS MARCAS"/>
      <Footer />
      <Routes>
        
      </Routes>
      </BrowserRouter>
 
  );
}

export default App; 
