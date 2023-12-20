import React from 'react';
import ReactDOM from 'react-dom/client';
import './Utils/index.scss';
import Path from './Component/Path/Path.jsx'

//RACINE DE NOTRE PROJET
//renvoie le composant Path qui contient le routes.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Path />
  </React.StrictMode>
)