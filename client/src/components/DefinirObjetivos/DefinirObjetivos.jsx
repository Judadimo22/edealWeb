import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateInfoPersonal } from "../../redux/actions";
import Swal from "sweetalert2";

const DefinirObjetivos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
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

  async function handleSubmitInfo(e) {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "¡Success!",
      text: "The new info has been updated",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Continue"
    });
    await dispatch(updateInfoPersonal(id, inputInfo));
    setInputInfo({
      estadoCivilCliente1: "",
      situacionLaboralCliente1: "",
      lugarResidenciaCLiente1: "",
      nombreDependiente: "",
      relacionDependiente: "",
      fechaNacimientoDependiente: ""
    });
    navigate(`/controlFinanzas/${id}`); 
  }

  const name = getUserId.name;
  const fechaNacimiento = getUserId.fechaNacimiento;

  return (
    <div>
      <form onSubmit={handleSubmitInfo}>
        <div className="text-center">
          <h1 className="text-[40px]">Paso 1- Informacion personal</h1>
        </div>
        <div>
          <h3>
            Por favor indiquenos la siguiente información de usted y de otras personas que soporten sus gastos y metas financieras
          </h3>
        </div>
        <div>
          <h3>Cliente 1</h3>
        </div>
        <div>
          <h3>Nombre: {name}</h3>
          <h3>Fecha de nacimiento: {fechaNacimiento}</h3>
        </div>
        <div className="px-[50px]">
          <div>
            <label htmlFor="">Estado civil</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="estadoCivilCliente1"
              name="estadoCivilCliente1"
              value={inputInfo.estadoCivilCliente1}
            />
          </div>
          <div>
            <label htmlFor="">Situacion laboral</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="situacionLaboralCliente1"
              name="situacionLaboralCliente1"
              value={inputInfo.situacionLaboralCliente1}
            />
          </div>
          <div>
            <label htmlFor="">Lugar residencia</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="lugarResidenciaCLiente1"
              name="lugarResidenciaCLiente1"
              value={inputInfo.lugarResidenciaCLiente1}
            />
          </div>
          <div>
            <div>
              <h2>Familia y otros dependientes</h2>
            </div>
            <div>
              <h3>
              Por favor indique si tiene hijos, nietos u otras personas cercanas que dependn financieramente de usted
              </h3>
            </div>
            <label htmlFor="">Nombre dependiente</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="nombreDependiente"
              name="nombreDependiente"
              value={inputInfo.nombreDependiente}
            />
          </div>
          <div>
            <label htmlFor="">Relacion dependiente</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="relacionDependiente"
              name="relacionDependiente"
              value={inputInfo.relacionDependiente}
            />
          </div>
          <div>
            <label htmlFor="">Fecha Nacimiento Dependiente</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="date"
              key="fechaNacimientoDependiente"
              name="fechaNacimientoDependiente"
              value={inputInfo.fechaNacimientoDependiente}
            />
          </div>
          <div className="text-center justify-center  mt-[10px] bg-blue-800 py-[2px] text-white">
            <button type="submit">Update info</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DefinirObjetivos;