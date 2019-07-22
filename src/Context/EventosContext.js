import React, { Component } from 'react';
import Axios from 'axios';

const EventosContext = React.createContext();

export const EventosCosumer = EventosContext.Consumer;
class EventosProvider extends Component {

    token ='C5KLS2XEWRLMOWWRX6LZ';
    ordenar='date'
    state={
        eventos : []
    }
//https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES
    obtenerEventos = async (busqueda)=>{
        let url =`https://www.eventbriteapi.com/v3/events/search/?categories=${busqueda.categoria}&token=${this.token}`;
        let eventos = await Axios.get(url);
        console.log('eventos',eventos.data.events);
        this.setState({
            eventos: eventos.data.events
        })
    }
    render() {
        return (
            <EventosContext.Provider
                value={{
                    eventos : this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;