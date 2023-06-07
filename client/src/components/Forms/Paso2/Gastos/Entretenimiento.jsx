import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updateGastosEntretenimiento} from "../../../../redux/actions/index";
import Swal from "sweetalert2";

const GastosEntretenimiento= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    restaurantes: "",
    cine: "",
    conciertos: "",
    eventosDeportivos: "",
    salidasFiestas: "",
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
        restaurantes: getUserId.restaurantes,
        cine: getUserId.cine,
        conciertos: getUserId.conciertos,
        eventosDeportivos: getUserId.eventosDeportivos,
        salidasFiestas: getUserId.salidasFiestas,
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
      !inputInfo.restaurantes ||
      !inputInfo.cine||
      !inputInfo.conciertos ||
      !inputInfo.eventosDeportivos ||
      !inputInfo.salidasFiestas 
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
  
      await dispatch(updateGastosEntretenimiento(storedUserId, inputInfo));
  
      setInputInfo({
        restaurantes: "",
        cine: "",
        conciertos: "",
        eventosDeportivos: "",
        salidasFiestas: "",
      });
  
      window.location.reload();
    }
  }
  const cine= getUserId.cine;

  return (
    <div className="mt-[30px]">
                {cine != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos en entretenimiento</h1>
                    </div>
                    </>
                ): (
                    <div>
             <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis gastos en entretenimiento</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Restaurantes</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="restaurantes"
              name="restaurantes"
              placeholder="Restaurantes"
              value={inputInfo.restaurantes}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Cine</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="cine"
              name="cine"
              placeholder="Cine"
              value={inputInfo.cine}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Conciertos</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="conciertos"
              name="conciertos"
              placeholder="Conciertos"
              value={inputInfo.conciertos}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Eventos deportivos</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="eventosDeportivos"
              name="eventosDeportivos"
              placeholder="Eventos deportivos"
              value={inputInfo.eventosDeportivos}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Salidas a fiestas</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="salidasFiestas"
              name="salidasFiestas"
              placeholder="Salidas a fiestas"
              value={inputInfo.salidasFiestas}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis gastos en entretenimiento</button>
          </div>
        </div>
      </form>
                    </div>
                )
                }
    </div>
  );
};

export default GastosEntretenimiento;