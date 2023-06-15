import React, { useEffect, useState } from "react";
import { getUserById, setUserId, updateObjetivosSalud } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Progreso = () => {
  const dispatch = useDispatch();
  const [selectedOptionSalud, setSelectedOptionSalud] = useState("");
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      dispatch(setUserId(storedUserId));
      setStoredUserId(storedUserId);
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserById(storedUserId));
  }, [dispatch, storedUserId]);

  const situacionLaboral = getUserId.situacionLaboralCliente1;
  const salario = getUserId.salario;
  const inversiones = getUserId.inversiones
  const arriendo = getUserId.arriendo
  const cuotaCarro = getUserId.cuotaCarro
  const cine = getUserId.cine
  const seguroSalud = getUserId.seguroSalud
  const hoteles = getUserId.hoteles
  const predial = getUserId.predial
  const institucionGastosCredito = getUserId.institucionGastosCredito
  const plazoVacaciones = getUserId.plazoVacaciones
  const cuentaConPlanSalud = getUserId.cuentaConPlanSalud
  const montoEstimadoEducacion = getUserId.montoEstimadoEducacion
  const valorViviendaRetiro = getUserId.valorViviendaRetiro
  const experienciaInversiones = getUserId.experienciaInversiones
  const viviendaPropia = getUserId.viviendaPropia

  let renderComponent = null;

  if (situacionLaboral == null) {
    renderComponent = (
      <div>
        Por favor diligencia el formulario
      </div>
    );
  } else if (situacionLaboral != null && salario == null ) {
    renderComponent = (
      <div>
        <h1>Has completado el 10% del formulario</h1>
      </div>
    );
  } else if (situacionLaboral != null && salario != null && inversiones == null){
    renderComponent = (
        <div>
          <h1>Has completado el 12% del formulario</h1>
        </div>
      );
  } else if (situacionLaboral != null && salario != null && inversiones != null && arriendo == null || cuotaCarro == null || cine == null || seguroSalud == null || hoteles == null || predial == null){
    renderComponent = (
        <div>
          <h1>Has completado el 15% del formulario</h1>
        </div>
      );
  }  else if (situacionLaboral != null && salario != null && inversiones != null && arriendo != null && cuotaCarro != null && cine != null && seguroSalud != null && hoteles != null && predial != null && institucionGastosCredito == null){
    renderComponent = (
        <div>
          <h1>Has completado el 18% del formulario</h1>
        </div>
      );
  } else if (situacionLaboral != null && salario != null && inversiones != null && arriendo != null && cuotaCarro != null && cine != null && seguroSalud != null && hoteles != null && predial != null && institucionGastosCredito != null &&  plazoVacaciones == null || cuentaConPlanSalud == null || montoEstimadoEducacion == null || valorViviendaRetiro == null  ){
    renderComponent = (
        <div>
          <h1>Has completado el 20% del formulario</h1>
        </div>
      );
  } else if (situacionLaboral != null && salario != null && inversiones != null && arriendo != null && cuotaCarro != null && cine != null && seguroSalud != null && hoteles != null && predial != null && institucionGastosCredito != null &&  plazoVacaciones != null && cuentaConPlanSalud != null && montoEstimadoEducacion != null && valorViviendaRetiro != null && experienciaInversiones == null   ){
    renderComponent = (
        <div>
          <h1>Has completado el 50% del formulario</h1>
        </div>
      );
  } else if (situacionLaboral != null && salario != null && inversiones != null && arriendo != null && cuotaCarro != null && cine != null && seguroSalud != null && hoteles != null && predial != null && institucionGastosCredito != null &&  plazoVacaciones != null && cuentaConPlanSalud != null && montoEstimadoEducacion != null && valorViviendaRetiro != null && experienciaInversiones != null &&  viviendaPropia == null  ){
    renderComponent = (
        <div>
          <h1>Has completado el 50% del formulario</h1>
        </div>
      );
  } else if (situacionLaboral != null && salario != null && inversiones != null && arriendo != null && cuotaCarro != null && cine != null && seguroSalud != null && hoteles != null && predial != null && institucionGastosCredito != null &&  plazoVacaciones != null && cuentaConPlanSalud != null && montoEstimadoEducacion != null && valorViviendaRetiro != null && experienciaInversiones != null &&  viviendaPropia != null  ){
    renderComponent = (
        <div>
          <h1>Gracias por completar el formulario de planeación financiera</h1>
        </div>
      );
  }

   else {
    // Otro caso
  }

  return (
    <div className="mt-[20px]">
      {renderComponent}
    </div>
  );
};

export default Progreso;
