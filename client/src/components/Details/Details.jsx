import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../redux/actions";
import style from './Details.module.css'


export const Details = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.Details);
  console.log('userDetails', userDetails)
  const { id } = useParams();

  const { 
    name,
    email, 
    lastName, 
    phone, 
    tipoCedula, 
    cedula, 
    emisionCedula, 
    fechaNacimiento,
    credito,
    bancoCredito,
    tarjetaDeCredito,
    ahorroPara,
    plazoAhorro,
    valorAhorro
} = userDetails;






  useEffect(() => {
    dispatch(getUserById(id));
  }, []);



  return (
      <div>
          <div>
            <h1><strong>Nombre:</strong>{name}</h1>
          </div>
          <div>
          <h1><strong>Apellido:</strong>{lastName}</h1>
          </div>
          <div>
          <h1><strong>Correo electrónico:</strong> {email}</h1>
          </div>
          <div>
          <h1><strong>Teléfono: </strong>{phone}</h1>
          </div>
          <div >
          <h1><strong>Tipo de cedula: </strong>{tipoCedula}</h1>
          </div>
          <div>
          <h1><strong>Número de cedula: </strong>{cedula}</h1>
          </div>
          <div>
          <h1><strong>Fecha de emisión de cedula: </strong>{emisionCedula}</h1>
          </div>
          <div>
          <h1><strong>Fecha de nacimiento: </strong>{fechaNacimiento}</h1>
          </div>
          <div>
            <h1 className={style.detalles}>Detalles del crédito</h1>
          </div>
          <div>
          <h1><strong>El usuario quiere un crédito para: </strong>{credito}</h1>
          </div>
          <div>
          <h1><strong>El usuario quiere su crédito con el banco: </strong>{bancoCredito}</h1>
          </div>
          <div>
          <h1><strong>El usuario {tarjetaDeCredito} tiene tarjeta de crédito </strong></h1>
          </div>
          <div>
            <h1 className={style.ahorro}>Detalles del ahorro</h1>
          </div>
          <div>
          <h1><strong>El usuario quiere su ahorro para: </strong>{ahorroPara}</h1>
          </div>
          <div>
          <h1><strong>El usuario seleccionó un plazo del ahorro en : </strong>{plazoAhorro}</h1>
          </div>
          <div>
          <h1><strong>El usuario quiere el valor de su ahorro sea de  : </strong>{valorAhorro}</h1>
          </div>


      </div>
  );
};