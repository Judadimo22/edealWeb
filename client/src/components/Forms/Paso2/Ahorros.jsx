import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId, updateAhorros} from "../../../redux/actions/index";
import Swal from "sweetalert2";

const Ahorros= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    aportesEmergencia: "",
    aportesAhorro: "",
    aportesRetiro: "",
    inversiones: "",
    otrosAhorros: "",
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
        aportesEmergencia: getUserId.aportesEmergencia,
        aportesAhorro: getUserId.aportesAhorro,
        aportesRetiro: getUserId.aportesRetiro,
        inversiones: getUserId.inversiones,
        otrosAhorros: getUserId.otrosAhorros,
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
      !inputInfo.aportesEmergencia ||
      !inputInfo.aportesAhorro ||
      !inputInfo.aportesRetiro ||
      !inputInfo.inversiones ||
      !inputInfo.otrosAhorros
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
  
      await dispatch(updateAhorros(storedUserId, inputInfo));
  
      setInputInfo({
        aportesEmergencia: "",
        aportesAhorro: "",
        aportesRetiro: "",
        inversiones: "",
        otrosAhorros: "",
      });
  
      window.location.reload();
    }
  }
  const salario = getUserId.salario;

  return (
    <div className="mt-[30px]">
      <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis ahorros</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Aportes a mi fondo de emergencia</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="aportesEmergencia"
              name="aportesEmergencia"
              placeholder="Aportes a mi fondo de emergencia"
              value={inputInfo.aportesEmergencia}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Aportes a mi fondo de ahorro</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="aportesAhorro"
              name="aportesAhorro"
              placeholder="Aportes a mi fondo de ahorro"
              value={inputInfo.aportesAhorro}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Aportes a mi fondo de retiro</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="aportesRetiro"
              name="aportesRetiro"
              placeholder="Aportes a mi fondo de retiro"
              value={inputInfo.aportesRetiro}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Inversiones</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="inversiones"
              name="inversiones"
              placeholder="Inversiones"
              value={inputInfo.inversiones}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Otros ahorros</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="otrosAhorros"
              name="otrosAhorros"
              placeholder="Otros ahorros"
              value={inputInfo.otrosAhorros}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis ahorros</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Ahorros;