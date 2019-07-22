import React, { Component } from 'react';
import Axios from 'axios';

const CategoriaContext = React.createContext();

export const CategoriaConsumer = CategoriaContext.Consumer;

class CategoriaProvider extends Component {
    token ='C5KLS2XEWRLMOWWRX6LZ';
    
    state={
        categorias:[]
    }
    componentDidMount(){
        this.obtenerCategoria()
    }

     obtenerCategoria =async ()=>{
        let url =`https://www.eventbriteapi.com/v3/subcategories/?token=${this.token}&locale=es_ES`

        let categorias = await Axios.get(url);

        this.setState({
            categorias : categorias.data.subcategories
        })
    }

    render() {
        return (
            <div>
                <CategoriaContext.Provider
                    value={{
                        categorias : this.state.categorias
                    }}
                >
                    {this.props.children}
                </CategoriaContext.Provider>
            </div>
        );
    }
}

export default CategoriaProvider;