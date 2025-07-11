import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div style={{padding: '2rem', textAlign: 'center'}}>
            <h1>404</h1>
            <p>La pagina que buscas no existe...</p>
            <link to="/">Volver al inicio</link>
        </div>
    );
};

export default NotFound;