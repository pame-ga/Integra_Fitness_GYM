import './App.css';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio';
import Servicio from './components/Servicio';
import Producto from './components/Producto';
import ProductoProteina from './components/Producto';
import ProductoCreatina from './components/Producto';
import ProductoCafeina from './components/Producto';
import Contacto from './components/Contacto';

document.addEventListener("DOMContentLoaded", { Inicio, Servicio,Producto,Contacto});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
        .register("../serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
}

function App() {
  return(  
  <BrowserRouter>
  <NavBar /> 
      <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/servicio' element={<Servicio />} />
          <Route path='/producto' element={<Producto />} />
          <Route path='/producto/proteina' element={<ProductoProteina />} />
          <Route path='/producto/creatina' element={<ProductoCreatina />} />
          <Route path='/producto/cafeína' element={<ProductoCafeina />} />
          <Route path='/contacto' element={<Contacto />} />
      </Routes>
  </BrowserRouter>
  );
  }
  
export default App;