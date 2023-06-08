import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updateGastosFinancieros} from "../../../../redux/actions/index";
import Swal from "sweetalert2";

const GastosFinancieros= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    seguroSalud: "",
    seguroVida: "",
    gastoTarjetaCredito: "",
    creditoLibreInversion: "",
    creditoUsd: "",
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
        seguroSalud: getUserId.seguroSalud,
        seguroVida: getUserId.seguroVida,
        gastoTarjetaCredito: getUserId.gastoTarjetaCredito,
        creditoLibreInversion: getUserId.creditoLibreInversion,
        creditoUsd: getUserId.creditoUsd,
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
      !inputInfo.seguroSalud ||
      !inputInfo.seguroVida||
      !inputInfo.gastoTarjetaCredito ||
      !inputInfo.creditoLibreInversion ||
      !inputInfo.creditoUsd 
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
  
      await dispatch(updateGastosFinancieros(storedUserId, inputInfo));
  
      setInputInfo({
        seguroSalud: "",
        seguroVida: "",
        gastoTarjetaCredito: "",
        creditoLibreInversion: "",
        creditoUsd: "",
      });
  
      window.location.reload();
    }
  }
  const seguroSalud= getUserId.seguroSalud;

  return (
    <div className="mt-[30px]">
                {seguroSalud != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos financieros</h1>
                    </div>
                    </>
                ): (
                    <div>
             <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis gastos financieros</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Seguro de salud</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="seguroSalud"
              name="seguroSalud"
              placeholder="Seguros de salud"
              value={inputInfo.seguroSalud}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Seguro de vida</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="seguroVida"
              name="seguroVida"
              placeholder="Seguro de vida"
              value={inputInfo.seguroVida}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Tarjetas de credito</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="gastoTarjetaCredito"
              name="gastoTarjetaCredito"
              placeholder="Tarjetas de credito"
              value={inputInfo.gastoTarjetaCredito}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white" htmlFor="">Credito libre inversion</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="creditoLibreInversion"
              name="creditoLibreInversion"
              placeholder="Credito libre inversion"
              value={inputInfo.creditoLibreInversion}
            />
          </div>
          <div className="text-left  my-[10px]">
            <label className="text-white"  htmlFor="">Credito en USD</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="creditoUsd"
              name="creditoUsd"
              placeholder="Credito en USD"
              value={inputInfo.creditoUsd}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis gastos financieros</button>
          </div>
        </div>
      </form>
                    </div>
                )
                }
    </div>
  );
};

export default GastosFinancieros;