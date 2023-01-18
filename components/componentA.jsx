import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ComponentB from "./componentB";

/**
* Devuelve un componente con los datos de contacto.
* @returns Un componente que representa un div con h2, h3, h3 y ComponentB.
*/

function componenteA({ contact }) {
    return (
      <div>
        <h2>Nombre: {contact.nombre}</h2>
        <h3>Apellidos: {contact.apellido}</h3>
        <h3>Email: {contact.email}</h3>
        <ComponentB estado={true} />
      </div>
    );
  }
  

  componenteA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
  };
  
  export default componenteA;