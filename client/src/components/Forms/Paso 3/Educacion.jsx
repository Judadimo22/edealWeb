import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId, updateObjetivosEducacion } from "../../../redux/actions/index";
import Swal from "sweetalert2";

const Educacion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    numeroHijos: "",
    nombreEstudiante1: "",
    añoIniciara: "",
    añosEstudiaria: "",
    importanciaEducacionEstudiante1: "",
    montoEstimadoEducacion: "",
    tipoInstitucionEducativa: "",
    ubicacionEstudiante1: "",
    nombreInstitucionEducativa: "",
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
        numeroHijos: getUserId.numeroHijos,
        nombreEstudiante1: getUserId.nombreEstudiante1,
        añoIniciara: getUserId.añoIniciara,
        añosEstudiaria: getUserId.añosEstudiaria,
        importanciaEducacionEstudiante1: getUserId.importanciaEducacionEstudiante1,
        montoEstimadoEducacion: getUserId.montoEstimadoEducacion,
        tipoInstitucionEducativa: getUserId.tipoInstitucionEducativa,
        ubicacionEstudiante1: getUserId.ubicacionEstudiante1,
        nombreInstitucionEducativa: getUserId.nombreInstitucionEducativa,
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
      !inputInfo.numeroHijos ||
      !inputInfo.nombreEstudiante1 ||
      !inputInfo.añoIniciara ||
      !inputInfo.añosEstudiaria ||
      !inputInfo.importanciaEducacionEstudiante1 ||
      !inputInfo.montoEstimadoEducacion ||
      !inputInfo.tipoInstitucionEducativa ||
      !inputInfo.ubicacionEstudiante1 ||
      !inputInfo.nombreInstitucionEducativa
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
  
      await dispatch(updateObjetivosEducacion(storedUserId, inputInfo));
  
      setInputInfo({
        numeroHijos: "",
        nombreEstudiante1: "",
        añoIniciara: "",
        añosEstudiaria: "",
        importanciaEducacionEstudiante1: "",
        montoEstimadoEducacion: "",
        tipoInstitucionEducativa: "",
        ubicacionEstudiante1: "",
        nombreInstitucionEducativa: "",
      });
  
      window.location.reload();
    }
  }

  const tipoInstitucionEducativa = ['Publico', 'Privado'];
  const ubicacion = ['Dentro de mi ciudad', 'Fuera de mi ciudad', 'Fuera de mi país']
  const numeroHijos = getUserId.numeroHijos 


  return (
    <div className="mt-[30px]">
      {numeroHijos != null ? (
        <h1>Gracias por completar el formulario de objetivos de educacion</h1>
      ) :
      <div>
        <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Educación</h1>
        </div>
        <div>
          <h3 className="text-white mb-[20px] mx-[300px] text-left">
          Complete esta sección de objetivos si planea pagar la totalidad o parte de una universidad u otro programa educativo para un hijo, nieto u otra persona.
          </h3>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Numero de hijos</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="numeroHijos"
              name="numeroHijos"
              placeholder="Numero de hijos"
              value={inputInfo.numeroHijos}
            />
          </div>
          <div className="mt-[20px]">
            <h2 className="text-[20px] text-white">Estudiante 1</h2>
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Nombre</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="nombreEstudiante1"
              name="nombreEstudiante1"
              placeholder="Nombre"
              value={inputInfo.nombreEstudiante1}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Año en el que iniciaría</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="añoIniciara"
              name="añoIniciara"
              placeholder="Año en el que iniciaria"
              value={inputInfo.añoIniciara}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Número de años que estudiaría</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="añosEstudiaria"
              name="añosEstudiaria"
              placeholder="Número de años que estudiaría"
              value={inputInfo.añosEstudiaria}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Importancia: Mayor-Menor (10 1)</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="importanciaEducacionEstudiante1"
              name="importanciaEducacionEstudiante1"
              placeholder="Importancia: Mayor-Menor (10 1)"
              value={inputInfo.importanciaEducacionEstudiante1}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label  className="text-white"  htmlFor="">Monto estimado anual</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="montoEstimadoEducacion"
              name="montoEstimadoEducacion"
              placeholder="Monto estimado anual"
              value={inputInfo.montoEstimadoEducacion}
            />
          </div>
          <div className="text-left my-[20px]">
            <select className="w-full py-[2px]" name="tipoInstitucionEducativa" key='tipoInstitucionEducativa' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Tipo de institución educativa</option>
              {
                tipoInstitucionEducativa.map(tipo => (
                  <option value={tipo} key={tipo}>{tipo}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[20px]">
            <select className="w-full py-[2px]" name="ubicacionEstudiante1" key='ubicacionEstudiante1' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Ubicacion</option>
              {
                ubicacion.map(ubi => (
                  <option value={ubi} key={ubi}>{ubi}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left  my-[10px]">
            <label  className="text-white"  htmlFor="">Nombre de la intitución educativa</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="nombreInstitucionEducativa"
              name="nombreInstitucionEducativa"
              placeholder="Nombre de la intitución educativa"
              value={inputInfo.nombreInstitucionEducativa}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar objetivos en salud</button>
          </div>
        </div>
      </form>
      </div> 
      } 
    </div>
  );
};

export default Educacion;