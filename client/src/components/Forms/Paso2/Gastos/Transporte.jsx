import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updateGastosTransporte} from "../../../../redux/actions/index";
import Swal from "sweetalert2";

const GastosTransporte= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    cuotaCarro: "",
    seguroCarro: "",
    gasolina: "",
    transportePublico: "",
    mantenimientoCarro: "",
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
      cuotaCarro: getUserId.cuotaCarro,
      seguroCarro: getUserId.seguroCarro,
      gasolina: getUserId.gasolina,
      transportePublico: getUserId.transportePublico,
      mantenimientoCarro: getUserId.mantenimientoCarro,
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
      !inputInfo.cuotaCarro ||
      !inputInfo.seguroCarro||
      !inputInfo.gasolina ||
      !inputInfo.transportePublico ||
      !inputInfo.mantenimientoCarro 
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
  
      await dispatch(updateGastosTransporte(storedUserId, inputInfo));
  
      setInputInfo({
        cuotaCarro: "",
        seguroCarro: "",
        gasolina: "",
        transportePublico: "",
        mantenimientoCarro: "",
      });
  
      window.location.reload();
    }
  }
  const cuotaCarro = getUserId.cuotaCarro;

  return (
    <div className="mt-[30px]">
                {cuotaCarro != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos de transporte</h1>
                    </div>
                    </>
                ): (
                    <div>
             <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis gastos de transporte</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Cuota del carro</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="cuotaCarro"
              name="cuotaCarro"
              placeholder="Cuota del carro"
              value={inputInfo.cuotaCarro}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Seguro del carro</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="seguroCarro"
              name="seguroCarro"
              placeholder="Seguro del carro"
              value={inputInfo.seguroCarro}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Gasolina</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="gasolina"
              name="gasolina"
              placeholder="Gasolina"
              value={inputInfo.gasolina}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Transporte publico</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="transportePublico"
              name="transportePublico"
              placeholder="Transporte publico"
              value={inputInfo.transportePublico}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Mantenimiento del carro</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="mantenimientoCarro"
              name="mantenimientoCarro"
              placeholder="Mantenimiento del carro"
              value={inputInfo.mantenimientoCarro}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis gastos de transporte</button>
          </div>
        </div>
      </form>
                    </div>
                )
                }
    </div>
  );
};

export default GastosTransporte;