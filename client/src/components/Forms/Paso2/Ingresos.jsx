import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId, updateIngresos } from "../../../redux/actions/index";
import Swal from "sweetalert2";

const Ingresos= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    salario: "",
    inversionesPesos: "",
    inversionesUsd: "",
    alquileresInmobiliarios: "",
    dividendos: "",
    pensiones: "",
    otrosIngresos: ""
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
        salario: getUserId.salario,
        inversionesPesos: getUserId.inversionesPesos,
        inversionesUsd: getUserId.inversionesUsd,
        alquileresInmobiliarios: getUserId.alquileresInmobiliarios,
        dividendos: getUserId.dividendos,
        pensiones: getUserId.pensiones,
        otrosIngresos: getUserId.otrosIngresos
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
      !inputInfo.salario ||
      !inputInfo.inversionesPesos ||
      !inputInfo.inversionesUsd ||
      !inputInfo.alquileresInmobiliarios ||
      !inputInfo.dividendos||
      !inputInfo.pensiones ||
      !inputInfo.otrosIngresos
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
  
      await dispatch(updateIngresos(storedUserId, inputInfo));
  
      setInputInfo({
        salario: "",
        inversionesPesos: "",
        inversionesUsd: "",
        alquileresInmobiliarios: "",
        dividendos: "",
        pensiones: "",
        otrosIngresos: ""
      });
  
      window.location.reload();
    }
  }
  const salario = getUserId.salario;

  return (
    <div className="mt-[30px]">
      <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis ingresos</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Salario</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="salario"
              name="salario"
              placeholder="Salario"
              value={inputInfo.salario}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Inversiones en pesos</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="inversionesPesos"
              name="inversionesPesos"
              placeholder="inversionesPesos"
              value={inputInfo.inversionesPesos}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Inversiones en Usd</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="inversionesUsd"
              name="inversionesUsd"
              placeholder="inversionesUsd"
              value={inputInfo.inversionesUsd}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Alquileres inmobiliarios</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="alquileresInmobiliarios"
              name="alquileresInmobiliarios"
              placeholder="Alquileres Inmobiliarios"
              value={inputInfo.alquileresInmobiliarios}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Dividendos</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="dividendos"
              name="dividendos"
              placeholder="Dividendos"
              value={inputInfo.dividendos}
            />
          </div>
          <div className="text-left  my-[10px]">
          <label className="text-white"  htmlFor="">Pensiones</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="pensiones"
              name="pensiones"
              placeholder="Pensiones"
              value={inputInfo.pensiones}
            />
          </div>
          <div className="text-left  my-[10px]">
          <label className="text-white"  htmlFor="">Otros ingresos</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="otrosIngresos"
              name="otrosIngresos"
              placeholder="Otros ingresos"
              value={inputInfo.otrosIngresos}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis ingresos</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Ingresos;