import React from 'react';
import logoDesktop from '../img/logo-desktop.webp';
import logoMobil from '../img/logo-mobil.webp';
import '../css/Inicio.css';

const Inicio = () => {
   return(
      <picture>
         <source srcSet={logoDesktop } media="(min-width:720px)"/>
         <source srcSet={logoMobil} />
<img className='fondo' src={logoMobil} alt='#'/>
</picture>  
   );
}

export default Inicio;