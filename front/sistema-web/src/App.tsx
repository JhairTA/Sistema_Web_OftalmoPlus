import React from 'react';
import './App.css';
import ComponenteMenu from './menu/ComponenteMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import rutas from './route-config';


//Este es el cpmponente App
function App() {
  return (
    <div className="main-container d-flex">
      <ComponenteMenu/>

      <div className="content">
        <BrowserRouter>
        <Routes>
          {
          rutas.map(ruta => 
          <Route key={ruta.path} path={ruta.path}
          element={<ruta.componente/>}/>)
          }
        </Routes>
        
        </BrowserRouter>
      </div>
    </div>
      
  );
}

export default App;
