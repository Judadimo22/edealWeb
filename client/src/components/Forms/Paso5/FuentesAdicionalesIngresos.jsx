import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updateFuentesAdicionales } from "../../../redux/actions/index";
import Swal from "sweetalert2";

const FuentesAdicionalesIngresos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    trabajarMas: "",
    ahorrarMas: "",
    gastarMenos: "",
    habilidadGenerarIngresos: "",
    desarrollarHabilidades: "",
    viviendaPropia: "",
    productosGustariaTener: "",
    analisisAsegurabilidad: "",
    migracion: "",
    planHerencia: ""
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
      trabajarMas: getUserId.trabajarMas,
      ahorrarMas: getUserId.ahorrarMas,
      gastarMenos: getUserId.gastarMenos,
      habilidadGenerarIngresos: getUserId.habilidadGenerarIngresos,
      desarrollarHabilidades: getUserId.desarrollarHabilidades,
      viviendaPropia: getUserId.viviendaPropia,
      productosGustariaTener: getUserId.productosGustariaTener,
      analisisAsegurabilidad: getUserId.analisisAsegurabilidad,
      migracion: getUserId.migracion,
      planHerencia: getUserId.planHerencia
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
      !inputInfo.trabajarMas ||
      !inputInfo.ahorrarMas ||
      !inputInfo.gastarMenos ||
      !inputInfo.habilidadGenerarIngresos||
      !inputInfo.desarrollarHabilidades ||
      !inputInfo.viviendaPropia ||
      !inputInfo.productosGustariaTener ||
      !inputInfo.analisisAsegurabilidad ||
      !inputInfo.migracion ||
      !inputInfo.planHerencia
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
  
      await dispatch(updateFuentesAdicionales(storedUserId, inputInfo));
  
      setInputInfo({
        trabajarMas: "",
        ahorrarMas: "",
        gastarMenos: "",
        habilidadGenerarIngresos: "",
        desarrollarHabilidades: "",
        viviendaPropia: "",
        productosGustariaTener: "",
        analisisAsegurabilidad: "",
        migracion: "",
        planHerencia: ""
      });
  
      window.location.reload();
    }
  }

  const importancia = ['1', '2', '3']
  const opciones = ['Si', 'No']
  const productos = ['Cuenta en USD', 'Plan de ahorro en USD', 'Tarjeta de credito en USD' ]
  const analisis = ['Seguro de vida', 'Seguro medico', 'Long Term Care Analysis']
  const migracionPais = ['Estados Unidos', 'Panama', 'Europa', 'Canada']
  const planDeHerencia = ['Formas de heredar mi patrimonio', 'Estrategia para heredar patrimonio']


  return (
    <div className="mt-[30px]">
        <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Fuentes adicionales de ingreso</h1>
        </div>
        <div>
          <h3 className="text-white mb-[20px] mx-[300px] text-left">
          Si sus activos actuales y sus fuentes de ingresos no alcanzan sus objetivos, exploremos algunas formas en las que podría compensar la diferencia.
          </h3>
        </div>
        <div className="px-[300px]">
        <div className="mt-[30px] text-white text-left">
              <h6>Por favor enumere (1 al 3)  cual de las siguientes opciones  para aumentar ingresos.  1 la opcion mas viable al 3 la menos viable</h6>
            </div>
          <div className="text-left my-[10px] flex justify-around">
            <label className="text-white w-[50%]" htmlFor="">Trabajar más</label>
            <select className="w-[50%] py-[2px]" name="trabajarMas" key='trabajarMas' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Importancia</option>
              {
                importancia.map(i => (
                  <option value={i} key={i}>{i}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px] flex justify-around">
            <label className="text-white w-[50%]" htmlFor="">Gastar menos</label>
            <select className="w-[50%] py-[2px]" name="gastarMenos" key='gastarMenos' onChange={(e) =>handleInputChange(e)} id="">
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
        <div className="text-left my-[30px]">
            <label className="text-white" htmlFor="">Creo que tengo una habilidad especial que pudiera permitirme generar ingresos</label>
            <select className="w-full py-[2px]" name="habilidadGenerarIngresos" key='habilidadGenerarIngresos' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Habilidad especial generar ingresos</option>
              {
                opciones.map(o => (
                  <option value={o} key={o}>{o}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">Quisiera desarrollar nuevas habilidades que me permitieran para generar ingresos </label>
            <select className="w-full py-[2px]" name="desarrollarHabilidades" key='desarrollarHabilidades' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Desarrollar nuevas habilidades</option>
              {
                opciones.map(o => (
                  <option value={o} key={o}>{o}</option>
                  ))                          
              }
            </select>

          </div>
          <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">Posee vivienda propia </label>
            <select className="w-full py-[2px]" name="viviendaPropia" key='viviendaPropia' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Posee vivienda propia</option>
              {
                opciones.map(o => (
                  <option value={o} key={o}>{o}</option>
                  ))                          
              }
            </select>

          </div>
          <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">Productos financieros que me gustaría tener </label>
            <select className="w-full py-[2px]" name="productosGustariaTener" key='productosGustariaTener' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Productos financieros</option>
              {
                productos.map(producto => (
                  <option value={producto} key={producto}>{producto}</option>
                  ))                          
              }
            </select>

          </div>
          <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">Análisis de asegurabilidad </label>
            <select className="w-full py-[2px]" name="analisisAsegurabilidad" key='analisisAsegurabilidad' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Analisis asegurabilidad</option>
              {
                analisis.map(a => (
                  <option value={a} key={a}>{a}</option>
                  ))                          
              }
            </select>

          </div>
          <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">Migración (estoy pensando migrar) </label>
            <select className="w-full py-[2px]" name="migracion" key='migracion' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Migracion</option>
              {
                migracionPais.map(m => (
                  <option value={m} key={m}>{m}</option>
                  ))                          
              }
            </select>

          </div>
          <div className="text-left my-[20px]">
            <label className="text-white" htmlFor="">Plan de herencia </label>
            <select className="w-full py-[2px]" name="planHerencia" key='planHerencia' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Plan de herencia</option>
              {
                planDeHerencia.map(p => (
                  <option value={p} key={p}>{p}</option>
                  ))                          
              }
            </select>

          </div>



          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar fuentes adicionales de ingresos</button>
          </div>
        </div>
      </form>
      </div> 
  );
};

export default FuentesAdicionalesIngresos;