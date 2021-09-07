import React, {Fragment, useState} from 'react';

const Formulario = () => {
    //Crear un objeto
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        direccion: ''
    })

    const tomadatos = (event) => {
        console.log('tomando datos', event.target.value)
        setDatos({
            ...datos, [event.target.name] : event.target.value
        })
    }

    const enviar = (event) => {
        //funcion manda datos en un submit o post
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido + ' ' + datos.direccion)
    }

    return ( 
        <Fragment>
            <h1>Formulario en React.</h1>
            <form onSubmit={enviar}>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" className="form-control" name="nombre" onChange={tomadatos}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido:</label>
                    <input type="text" className="form-control" name="apellido" onChange={tomadatos}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección:</label>
                    <input type="text" className="form-control" name="direccion" onChange={tomadatos}/>
                </div>
                <div className="mb-3">
                <button type="submit" className="btn btn-primary">Enviar Datos</button>
                </div>
            </form>
        </Fragment>
     );
}
 
export default Formulario;

