import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updatePerfilRiesgo } from "../../../redux/actions/index";
import Swal from "sweetalert2";

const PerfilRiesgo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    experienciaInversiones: "",
    poseoAlgunActivo: "",
    generarIngresos: "",
    arriesgarMiCapital: "",
    incrementarPatrimonio: "",
    protegerPatrimonio: "",
    perfilActitudInversionista: "",
    prioridadesFinancieras: "",
    iniciarRetiros: "",
    continuarRetiros: ""
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
        experienciaInversiones: getUserId.experienciaInversiones,
        poseoAlgunActivo: getUserId.poseoAlgunActivo,
        generarIngresos: getUserId.generarIngresos,
        arriesgarMiCapital: getUserId.arriesgarMiCapital,
        incrementarPatrimonio: getUserId.incrementarPatrimonio,
        protegerPatrimonio: getUserId.protegerPatrimonio,
        perfilActitudInversionista: getUserId.perfilActitudInversionista,
        prioridadesFinancieras: getUserId.prioridadesFinancieras,
        iniciarRetiros: getUserId.iniciarRetiros,
        continuarRetiros: getUserId.continuarRetiros
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
      !inputInfo.experienciaInversiones ||
      !inputInfo.poseoAlgunActivo ||
      !inputInfo.generarIngresos ||
      !inputInfo.arriesgarMiCapital||
      !inputInfo.incrementarPatrimonio ||
      !inputInfo.protegerPatrimonio ||
      !inputInfo.perfilActitudInversionista ||
      !inputInfo.prioridadesFinancieras ||
      !inputInfo.iniciarRetiros ||
      !inputInfo.continuarRetiros
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
  
      await dispatch(updatePerfilRiesgo(storedUserId, inputInfo));
  
      setInputInfo({
        experienciaInversiones: "",
        poseoAlgunActivo: "",
        generarIngresos: "",
        arriesgarMiCapital: "",
        incrementarPatrimonio: "",
        protegerPatrimonio: "",
        perfilActitudInversionista: "",
        prioridadesFinancieras: "",
        iniciarRetiros: "",
        continuarRetiros: ""
      });
  
      window.location.reload();
    }
  }

  const nivelExperiencia = ['Alta', 'Media', 'Baja'];
  const tipoInstitucionEducativa = ['Alta', 'Media', 'Baja'];
  const ubicacion = ['Dentro de mi ciudad', 'Fuera de mi ciudad', 'Fuera de mi país']
  const activos = ['CDT', 'Bonos', 'Acciones', 'Inmuebles']
  const importancia = ['1', '2', '3', '4']
  const perfil = ['Especulacion', 'Conservador', 'Moderado', 'Agresivo']
  const prioridades = ['Como aumentar mi patrimonio', 'Como crear un Plan de ahorro para mi retiro', 'Generar Ingresos en USD', 'Como cubrir las necesidades de mi familia con un seguro de vida', 'Como invertir en bienes raices en USD', 'Filantropia']
  const plazo = ['Corto plazo (menos de 2 años)', 'Mediano plazo (2-5 años)', 'Mediano plazo (6-10 años)', 'Largo plazo (11-20 años)', 'Más de 20 años']

  return (
    <div className="mt-[30px]">
        <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Perfil de riesgo</h1>
        </div>
        <div>
          <h3 className="text-white mb-[20px] mx-[300px] text-left">
          Las siguientes preguntas nos guiaran a entender y definir mejor cual es su perfil de tolerancia al riesgo 
          </h3>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">Cual es su nivel de experiencia</label>
            <select className="w-full py-[2px]" name="experienciaInversiones" key='experienciaInversiones' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Nivel de experiencia</option>
              {
                nivelExperiencia.map(nivel => (
                  <option value={nivel} key={nivel}>{nivel}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">He invertido o actualmente poseo alguno de los siguientes activos</label>
            <select className="w-full py-[2px]" name="poseoAlgunActivo" key='poseoAlgunActivo' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">He invertido o actualmente poseo alguno de los siguientes activos</option>
              {
                activos.map(a => (
                  <option value={a} key={a}>{a}</option>
                  ))                          
              }
            </select>
            <div className="mt-[30px] text-white">
              <h6>Pregunta 1: Enumere de 1 al 4 las siguientes objetivos de inversión desde el mas importante (1) al menos improtante (4) para usted</h6>
            </div>
          </div>
          <div className="text-left my-[10px] flex justify-around">
            <label className="text-white w-[50%]" htmlFor="">Arriesgar mi capital</label>
            <select className="w-[50%] py-[2px]" name="arriesgarMiCapital" key='arriesgarMiCapital' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Importancia</option>
              {
                importancia.map(i => (
                  <option value={i} key={i}>{i}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px] flex justify-around">
            <label className="text-white w-[50%]" htmlFor="">Generar ingresos</label>
            <select className="w-[50%] py-[2px]" name="generarIngresos" key='generarIngresos' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Importancia</option>
              {
                importancia.map(i => (
                  <option value={i} key={i}>{i}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px] flex justify-around">
            <label className="text-white w-[50%]" htmlFor="">Incrementar mi patrimonio</label>
            <select className="w-[50%] py-[2px]" name="incrementarPatrimonio" key='incrementarPatrimonio' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Importancia</option>
              {
                importancia.map(i => (
                  <option value={i} key={i}>{i}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px] flex justify-around">
            <label className="text-white w-[50%]" htmlFor="">Proteger mi patrimonio</label>
            <select className="w-[50%] py-[2px]" name="protegerPatrimonio" key='protegerPatrimonio' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Importancia</option>
              {
                importancia.map(i => (
                  <option value={i} key={i}>{i}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="mt-[50px] text-white text-left">
              <h6>Pregunta 2. Seleccione cual perfil considera usted que describe si actitud como inversionista</h6>
            </div>
          <div className="text-left my-[10px]">
          <select className="w-full py-[2px]" name="perfilActitudInversionista" key='perfilActitudInversionista' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Perfil inversionista</option>
              {
                perfil.map(p => (
                  <option value={p} key={p}>{p}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="mt-[50px] text-white text-left">
              <h6>Pregunta 3. Selecciones cuales son las prioridades financieras que desearia revisar con este analisis</h6>
            </div>
          <div className="text-left my-[10px]">
          <select className="w-full py-[2px]" name="prioridadesFinancieras" key='prioridadesFinancieras' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Prioridades financieras</option>
              {
                prioridades.map(p => (
                  <option value={p} key={p}>{p}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="mt-[50px] text-white text-left">
              <h6>Pregunta 4. En aproximadamente cuantos años espera que iniciara retiros para sus principal necesidad financiera a cubrir</h6>
            </div>
          <div className="text-left my-[10px]">
          <select className="w-full py-[2px]" name="iniciarRetiros" key='iniciarRetiros' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Plazo iniciar retiros</option>
              {
                plazo.map(p => (
                  <option value={p} key={p}>{p}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="mt-[50px] text-white text-left">
              <h6>Preguntas 5. Una vez que comience a retirar fondos para su necesidad financiera principal, ¿durante cuánto tiempo planea que continuarán los retiros?</h6>
            </div>
          <div className="text-left my-[10px]">
          <select className="w-full py-[2px]" name="continuarRetiros" key='continuarRetiros' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Tiempo para continuar con retiros</option>
              {
                plazo.map(p => (
                  <option value={p} key={p}>{p}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar perfil de riesgo</button>
          </div>
        </div>
      </form>
      </div> 
  );
};

export default PerfilRiesgo;