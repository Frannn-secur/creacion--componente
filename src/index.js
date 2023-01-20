import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Ficha} from './Ficha';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Ficha nombre={"Pepe"} direccion= {"En alguna calle de cordoba"} localidad={"Cordoba"} cp={"14011"} />
  </>
);
