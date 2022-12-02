import React from "react";
import "../css/Servicio.css";
import M2 from "../img/M2.png";
import m1 from "../img/m1.png";
import gif from "../img/sul.gif";

function Servicio(){
  return(
    <div className="container-fluid">
    <div class="row">
      <div class="col-12 text-center mt-5 mb-3">
        <h2>MEMBRESIAS</h2>
      </div>
      <div class="col-12">
    <div class="card-group">
      <div class="card">
        <img src={m1}class="card-img-top" alt="Visita"/>
        <div class="card-body">
          <h1 class="card-title">VISITA</h1>
          <h1 class="card-title pricing-card-title">$40<small class="text-muted fw-light">/Visita</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Acceso a cualquier área</li>
                <li>Acesoria con entrenador</li>
              </ul>
        </div>
      </div>
      <div class="card">
        <img srcSet={M2} class="card-img-top" alt="cardio"/>
        <div class="card-body">
          <h1 class="card-title">CARDIO</h1>
          <h1 class="card-title pricing-card-title">$300<small class="text-muted fw-light">/mensual</small></h1>
          <p class="card-text"></p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col-12">
    <img className="video" src="../img/sul.gif" alt="sgkdsjfdl" />
    </div>
  </div>
  </div>
    
      );
      
}

export default Servicio;