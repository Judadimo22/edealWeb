import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserById, updateInfoPersonal } from "../../redux/actions";
import Swal from "sweetalert2";

const ControlFinanzas = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    estadoCivilCliente1: "",
    situacionLaboralCliente1: "",
    lugarResidenciaCLiente1: "",
    nombreDependiente: "",
    relacionDependiente: "",
    fechaNacimientoDependiente: ""
  });

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id]);

  useEffect(() => {
    setInputInfo({
      estadoCivilCliente1: getUserId.estadoCivilCliente1,
      situacionLaboralCliente1: getUserId.situacionLaboralCliente1,
      lugarResidenciaCLiente1: getUserId.lugarResidenciaCLiente1,
      nombreDependiente: getUserId.nombreDependiente,
      relacionDependiente: getUserId.relacionDependiente,
      fechaNacimientoDependiente: getUserId.fechaNacimientoDependiente
    });
  }, [getUserId]);

  function handleInputChange(e) {
    e.preventDefault();
    setInputInfo({
      ...inputInfo,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmitInfo(e) {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "¡Success!",
      text: "The new info has been updated",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Continue"
    });
    dispatch(updateInfoPersonal(id, inputInfo));
    setInputInfo({
      estadoCivilCliente1: "",
      situacionLaboralCliente1: "",
      lugarResidenciaCLiente1: "",
      nombreDependiente: "",
      relacionDependiente: "",
      fechaNacimientoDependiente: ""
    });
  }

  const aportesAhorro = getUserId.aportesAhorro;
  const dividendos = getUserId.dividendos;

  return (
    <div>
        <div className="text-center">
          <h1 className="text-[40px]">Paso 2- Control finanzas</h1>
        </div>
        <div>
          <h3>Mis ingresos y mis gastos</h3>
        </div>
        <div className="px-[50px]">
        <div>
            <Link to={`/ingresos/${id}`}>
              <button>Ingresos</button>
            </Link>
            {dividendos && <h5>Ya has completado el formulario de ingresos</h5>}
          </div>
          <div>
            <Link to={`/ahorros/${id}`}>
              <button>Ahorros</button>
            </Link>
            {aportesAhorro && <h5>Ya has completado el formulario de ahorros</h5>}
          </div>
          <div>
            <Link to={`/gastos/${id}`}>
              <button>Gastos</button>
            </Link>
            {aportesAhorro && <h5>Ya has completado el formulario de ahorros</h5>}
          </div>
          <div className="text-center justify-center  mt-[10px] bg-blue-800 py-[2px] text-white">
            <button>Continuar</button>
          </div>
        </div>
    </div>
  );
};

export default ControlFinanzas;
