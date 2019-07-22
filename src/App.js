import React from 'react';
import Header from './Components/Header';
import CategoriaProvider from './Context/CategoriaContext';
import Formulario from './Components/Formulario';
import EventosProvider from './Context/EventosContext';
import ListaEvento from './Components/ListaEvento';


function App() {
  return (
    <EventosProvider>
      <CategoriaProvider>
        <Header />
        <div className="uk-container">
          <Formulario />
          <ListaEvento/>
        </div>

      </CategoriaProvider>
    </EventosProvider>
  );
}

export default App;
