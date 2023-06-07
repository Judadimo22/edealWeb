import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updateGastosHogar} from "../../../../redux/actions/index";
import Swal from "sweetalert2";

const GastosHogar= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    creditoHipotecario: "",
    arriendo: "",
    serviciosPublicos: "",
    internet: "",
    planCelular: "",
    mantenimientoHogar: "",
    segurosHogar: "",
    mercado: "",
    otrosGastosHogar: ""
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
        creditoHipotecario: getUserId.creditoHipotecario,
        arriendo: getUserId.arriendo,
        serviciosPublicos: getUserId.serviciosPublicos,
        internet: getUserId.internet,
        planCelular: getUserId.planCelular,
        mantenimientoHogar: getUserId.mantenimientoHogar,
        segurosHogar: getUserId.segurosHogar,
        mercado: getUserId.mercado,
        otrosGastosHogar: getUserId.otrosGastosHogar
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
      !inputInfo.creditoHipotecario ||
      !inputInfo.arriendo ||
      !inputInfo.serviciosPublicos ||
      !inputInfo.internet ||
      !inputInfo.planCelular ||
      !inputInfo.mantenimientoHogar ||
      !inputInfo.segurosHogar ||
      !inputInfo.mercado ||
      !inputInfo.otrosGastosHogar
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
  
      await dispatch(updateGastosHogar(storedUserId, inputInfo));
  
      setInputInfo({
        creditoHipotecario: "",
        arriendo: "",
        serviciosPublicos: "",
        internet: "",
        planCelular: "",
        mantenimientoHogar: "",
        segurosHogar: "",
        mercado: "",
        otrosGastosHogar: ""
      });
  
      window.location.reload();
    }
  }
  const creditoHipotecario = getUserId.creditoHipotecario;

  return (
    <div className="mt-[30px]">
                {creditoHipotecario != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos del hogar</h1>
                    </div>
                    </>
                ): (
                    <div>
             <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis gastos del hogar</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Credito hipotecario</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="creditoHipotecario"
              name="creditoHipotecario"
              placeholder="Credito hipotecario"
              value={inputInfo.creditoHipotecario}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Arriendo</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="arriendo"
              name="arriendo"
              placeholder="Arriendo"
              value={inputInfo.arriendo}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Servicios publicos</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="serviciosPublicos"
              name="serviciosPublicos"
              placeholder="Servicios publicos"
              value={inputInfo.serviciosPublicos}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Internet</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="internet"
              name="internet"
              placeholder="Internet"
              value={inputInfo.internet}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Plan de celular</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="planCelular"
              name="planCelular"
              placeholder="Plan de celular"
              value={inputInfo.planCelular}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Mantenimiento del hogar</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="mantenimientoHogar"
              name="mantenimientoHogar"
              placeholder="Mantenimiento del hogar"
              value={inputInfo.mantenimientoHogar}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Seguros del hogar</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="segurosHogar"
              name="segurosHogar"
              placeholder="Seguros del hogar"
              value={inputInfo.segurosHogar}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Mercado</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="mercado"
              name="mercado"
              placeholder="Mercado"
              value={inputInfo.mercado}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Otros</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="otrosGastosHogar"
              name="otrosGastosHogar"
              placeholder="Otros"
              value={inputInfo.otrosGastosHogar}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis gastos del hogar</button>
          </div>
        </div>
      </form>
                    </div>
                )
                }
    </div>
  );
};

export default GastosHogar;