import React from 'react';
import PropTypes from 'prop-types';
import { EventosCosumer } from '../Context/EventosContext';
import Evento from './Evento';

const ListaEvento = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <h1>Resultado evento</h1>
            <EventosCosumer>
                {(value)=>{
                    
                    return value.eventos.map(evento=>(
                        <Evento key={evento.id}
                            evento={evento}
                        />
                    ))
                }}
            </EventosCosumer>
        </div>
    );
};

ListaEvento.propTypes = {
    
};

export default ListaEvento;