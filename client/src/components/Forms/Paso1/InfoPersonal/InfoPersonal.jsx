import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateInfoPersonal, setUserId } from "../../../../redux/actions";
import Swal from "sweetalert2";

const InfoPersonal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
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
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      dispatch(setUserId(storedUserId));
      setStoredUserId(storedUserId);
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserById(storedUserId));
  }, [dispatch, storedUserId]);

  useEffect(() => {
    dispatch(getUserById(storedUserId));
  }, [storedUserId]);

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
  
    if (
      !inputInfo.estadoCivilCliente1 ||
      !inputInfo.situacionLaboralCliente1 ||
      !inputInfo.lugarResidenciaCLiente1 ||
      !inputInfo.nombreDependiente ||
      !inputInfo.relacionDependiente ||
      !inputInfo.fechaNacimientoDependiente
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor complete todos los campos",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK"
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "La nueva información ha sido actualizada",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Continuar"
      });
  
      await dispatch(updateInfoPersonal(storedUserId, inputInfo));
  
      setInputInfo({
        estadoCivilCliente1: "",
        situacionLaboralCliente1: "",
        lugarResidenciaCLiente1: "",
        nombreDependiente: "",
        relacionDependiente: "",
        fechaNacimientoDependiente: ""
      });
  
      window.location.reload();
    }
  }
  const name = getUserId.name;
  const fechaNacimiento = getUserId.fechaNacimiento;
  const estadoCivil = ['Soltero', 'Casado', 'En convivencia'];
  const situacionLaboral = ['Jubilado', 'Dedicado al hogar', 'Desempleado', 'Empleado', 'Empresa propia']

  return (
    <div className="mt-[30px]">
      <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Paso 1- Informacion personal</h1>
        </div>
        <div>
          <h3 className="text-white mb-[20px] mx-[300px] text-left">
            Por favor indiquenos la siguiente información de usted y de otras personas que soporten sus gastos y metas financieras
          </h3>
        </div>
        <div>
          <h3 className="text-[25px] text-white"><strong>Cliente 1</strong></h3>
        </div>
        <div className="text-left pl-[300px] mt-[10px] mb-[10px]">
          <h3 className="text-white text-[18px]"><strong>Nombre:</strong> {name}</h3>
          <h3 className="text-white text-[18px]"> <strong>Fecha de nacimiento:</strong> {fechaNacimiento}</h3>
        </div>
        <div className="px-[300px]">
          <div className="text-left my-[10px]">
            <select className="w-full py-[2px] rounded" name="estadoCivilCliente1" key='estadoCivilCliente1' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Estado civil</option>
              {
                estadoCivil.map(estado => (
                  <option value={estado} key={estado}>{estado}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px]">
          <select className="w-full py-[2px] rounded" name="situacionLaboralCliente1" key='situacionLaboralCliente1' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Situación laboral</option>
              {
                situacionLaboral.map(situacion => (
                  <option value={situacion} key={situacion}>{situacion}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Lugar de residencia</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="lugarResidenciaCLiente1"
              name="lugarResidenciaCLiente1"
              placeholder="Lugar de residencia"
              value={inputInfo.lugarResidenciaCLiente1}
            />
          </div>
          <div className="mt-[20px]">
            <div className="mb-[10px]">
              <h2 className="text-white text-[25px]">Familia y otros dependientes</h2>
            </div>
            <div>
              <h3 className="text-white text-left">
              Por favor indique si tiene hijos, nietos u otras personas cercanas que dependn financieramente de usted
              </h3>
            </div>
            <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Nombre dependiente</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="nombreDependiente"
              name="nombreDependiente"
              placeholder="Nombre dependiente"
              value={inputInfo.nombreDependiente}
            />
            </div>
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Relacion dependiente</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="relacionDependiente"
              name="relacionDependiente"
              placeholder="Relación dependiente"
              value={inputInfo.relacionDependiente}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label text-white htmlFor="">Fecha Nacimiento Dependiente</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="date"
              key="fechaNacimientoDependiente"
              name="fechaNacimientoDependiente"
              value={inputInfo.fechaNacimientoDependiente}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar info personal</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoPersonal;