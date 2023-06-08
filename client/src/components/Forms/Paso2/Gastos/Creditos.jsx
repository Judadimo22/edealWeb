import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId,updateGastosCredito} from "../../../../redux/actions/index";
import Swal from "sweetalert2";

const GastosCreditos= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    tipoDeudaGastosCredito: "",
    institucionGastosCredito: "",
    montoInicialGastosCredito: "",
    fechaAdquisicionGastosCredito: "",
    plazoCreditoGastosCredito: "",
    saldoActualGastosCredito: "",
    interesAnualGastosCredito: "",
    pagoMensualGastosCredito: ""
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
        tipoDeudaGastosCredito: getUserId.tipoDeudaGastosCredito,
        institucionGastosCredito: getUserId.institucionGastosCredito,
        montoInicialGastosCredito: getUserId.montoInicialGastosCredito,
        fechaAdquisicionGastosCredito: getUserId.fechaAdquisicionGastosCredito,
        plazoCreditoGastosCredito: getUserId.plazoCreditoGastosCredito,
        saldoActualGastosCredito: getUserId.saldoActualGastosCredito,
        interesAnualGastosCredito: getUserId.interesAnualGastosCredito,
        pagoMensualGastosCredito: getUserId.pagoMensualGastosCredito
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
      !inputInfo.tipoDeudaGastosCredito ||
      !inputInfo.institucionGastosCredito||
      !inputInfo.montoInicialGastosCredito ||
      !inputInfo.fechaAdquisicionGastosCredito ||
      !inputInfo.plazoCreditoGastosCredito ||
      !inputInfo.saldoActualGastosCredito ||
      !inputInfo. interesAnualGastosCredito
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
  
      await dispatch(updateGastosCredito(storedUserId, inputInfo));
  
      setInputInfo({
        tipoDeudaGastosCredito: "",
        institucionGastosCredito: "",
        montoInicialGastosCredito: "",
        fechaAdquisicionGastosCredito: "",
        plazoCreditoGastosCredito: "",
        saldoActualGastosCredito: "",
        interesAnualGastosCredito: "",
        pagoMensualGastosCredito: ""
      });
  
      window.location.reload();
    }
  }
  const tipoDeudaGastosCredito= getUserId.tipoDeudaGastosCredito;
  const tipoDeuda = ['Tarjeta de credito', 'Libre inversion'];
  const instituciones = [
    'Banco de Bogotá',
    'Banco Popular',
    'Coorbanca',
    'Bancolombia',
    'Banco CITIBANK',
    'HSBC Colombia',
    'Banco GNB Sudameris',
    'BBVA Colombia ',
    'Helm Bank',
    'MULTIBANCA COLPATRIA',
    'Banco de Occidente',
    'Banco Caja Social ',
    'Banco Davivienda',
    'Banco AV Villas',
    'Fiduciaria Skandia',
    'Banco Pichincha S.A',
    'Banco Coomeva S.A.',
    'Banco Procredit',
    'Banco Falabella',
    'Coltefinanciera',
    'Coopcentral'
  ]

  return (
    <div className="mt-[30px]">
                {tipoDeudaGastosCredito != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos en creditos</h1>
                    </div>
                    </>
                ): (
                    <div>
             <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Mis gastos en creditos</h1>
        </div>
        <div className="px-[300px]">
        <div className="text-left my-[10px]">
            <select className="w-full py-[2px] rounded" name="tipoDeudaGastosCredito" key='tipoDeudaGastosCredito' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Tipo de deuda</option>
              {
                tipoDeuda.map(tipo => (
                  <option value={tipo} key={tipo}>{tipo}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px]">
          <select className="w-full py-[2px] rounded" name="institucionGastosCredito" key='institucionGastosCredito' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Institucion</option>
              {
                instituciones.map(institucion => (
                  <option value={institucion} key={institucion}>{institucion}</option>
                  ))                          
              }
            </select>
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Monto inicial del credito</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="montoInicialGastosCredito"
              name="montoInicialGastosCredito"
              placeholder="Monto inicial del credito"
              value={inputInfo.montoInicialGastosCredito}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Fecha de adquisicion</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="date"
              key="fechaAdquisicionGastosCredito"
              name="fechaAdquisicionGastosCredito"
              value={inputInfo.fechaAdquisicionGastosCredito}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Plazo del credito</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="plazoCreditoGastosCredito"
              name="plazoCreditoGastosCredito"
              placeholder="Plazo del credito"
              value={inputInfo.plazoCreditoGastosCredito}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Saldo actual</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="saldoActualGastosCredito"
              name="saldoActualGastosCredito"
              placeholder="Saldo actual"
              value={inputInfo.saldoActualGastosCredito}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Interes de la deuda (anual)</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="interesAnualGastosCredito"
              name="interesAnualGastosCredito"
              placeholder="Interes de la deuda (anual)"
              value={inputInfo.interesAnualGastosCredito}
            />
          </div>
          <div className="text-left my-[10px]">
            <label className="text-white" htmlFor="">Pago mensual (opcional)</label>
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="pagoMensualGastosCredito"
              name="pagoMensualGastosCredito"
              placeholder="Pago mensual (opcional)"
              value={inputInfo.pagoMensualGastosCredito}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar mis gastos en creditos</button>
          </div>
        </div>
      </form>
                    </div>
                )
                }
    </div>
  );
};

export default GastosCreditos;