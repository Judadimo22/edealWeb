import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updateGastosVacaciones} from "../../../../redux/actions/index";
import Swal from "sweetalert2";

const Vacaciones= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    tiquetesAereos: "",
    hoteles: "",
    gastosViaje: "",
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
        tiquetesAereos: getUserId.tiquetesAereos,
        hoteles: getUserId.hoteles,
        gastosViaje: getUserId.gastosViaje,
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
      !inputInfo.hoteles ||
      !inputInfo.tiquetesAereos||
      !inputInfo.gastosViaje 
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
  
      await dispatch(updateGastosVacaciones(storedUserId, inputInfo));
  
      setInputInfo({
        tiquetesAereos: "",
        hoteles: "",
        gastosViaje: "",
      });
  
      window.location.reload();
    }
  }
  const hoteles= getUserId.hoteles;

  return (
    <div className="mt-[30px]">
                {hoteles != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos en vacaciones</h1>
                    </div>
                    </>
                ): (
                    <div>
             <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis gastos en vacaciones</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Tiquetes aereos</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="tiquetesAereos"
              name="tiquetesAereos"
              placeholder="Tiquetes aereos"
              value={inputInfo.tiquetesAereos}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Hoteles</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="hoteles"
              name="hoteles"
              placeholder="Hoteles"
              value={inputInfo.hoteles}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Gastos de viaje</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="gastosViaje"
              name="gastosViaje"
              placeholder="Gastos de viaje"
              value={inputInfo.gastosViaje}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis gastos en vacaciones</button>
          </div>
        </div>
      </form>
                    </div>
                )
                }
    </div>
  );
};

export default Vacaciones;