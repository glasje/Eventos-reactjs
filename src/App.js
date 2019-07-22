import React from 'react';
import Header from './Components/Header';
import CategoriaProvider from './Context/CategoriaContext';
import Formulario from './Components/Formulario';


function App() {
  return (
    <div>
      
      <CategoriaProvider>
        <Header/>
        <div className="uk-container">
             <Formulario/>
        </div>
     
        </CategoriaProvider>
    </div>
  );
}

export default App;
