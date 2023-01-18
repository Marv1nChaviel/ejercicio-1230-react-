
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
* ComponentB es una función que toma un valor booleano como argumento y devuelve un div que contiene un
* elemento h5 y un elemento de botón.
* @returns Una función que devuelve un componente.
*/

function ComponentB(estado) {
  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h5>
        {conectado === false ? "Contacto no disponible" : "Contacto en linea"}
      </h5>
      <button onClick={() => setConectado(!conectado)}>
        {conectado === false ? "Conectado" : "Desconectado"}
      </button>
    </div>
  );
}


ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;