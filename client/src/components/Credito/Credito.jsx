import React, { useEffect, useState } from "react";
import { getUserById, setUserId, updateCredito, updateObjetivosSalud } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Credito = () => {
  const dispatch = useDispatch();
  const [selectedOptionTarjetaCredito, setSelectedOptionTarjetaCredito] = useState("");
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    credito: "",
    tarjetaDeCredito: "",
    bancoCredito: "",
    montoCredito: "",
    plazoCredito: ""
  });

  const handleOptionChangeTarjetaCredito = (e) => {
    setSelectedOptionTarjetaCredito(e.target.value);
  
    if (e.target.value === "Si") {
      setInputInfo({
        ...inputInfo,
        tarjetaDeCredito: e.target.value,
      });
    } else {
      setInputInfo({
        ...inputInfo,
        tarjetaDeCredito: e.target.value,
        bancoCredito: "",
      });
    }
  };

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
    setInputInfo({
        credito: getUserId.credito,
        tarjetaDeCredito: getUserId.tarjetaDeCredito,
        bancoCredito: getUserId.bancoCredito,
        montoCredito: getUserId.montoCredito,
        plazoCredito: getUserId.plazoCredito
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
      !inputInfo.tarjetaDeCredito ||
      !inputInfo.montoCredito ||
      !inputInfo.plazoCredito
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
  
      await dispatch(updateCredito(storedUserId, inputInfo));
  
      setInputInfo({
        credito: "",
        tarjetaDeCredito: "",
        bancoCredito: "",
        montoCredito: "",
        plazoCredito: ""
      });
  
      window.location.reload();
    }
  }

  const tipoPlan = ['Publico', 'Privado']
  const porcentajeCobertura = ['0 a 25%', '25 a 50%', '50 a 75%', '100%']
  const credito = getUserId.credito
  const bancos = [
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
  const creditoPara = ['Gastos personales', 'Celular', 'Bajar la tasa de interes de mi tarjeta de credito', 'Pagar deudas', 'Hacer mercado']

  const plazo = [
    '1 ',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20'
  ]


  const renderFormTarjetaCredito = () => {
    if (selectedOptionTarjetaCredito === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]">
            <div>
                <label htmlFor="">Con cual banco</label>
                <select className="w-full py-[2px] rounded" name="bancoCredito" key='bancoCredito' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Banco</option>
              {
                bancos.map(banco => (
                  <option value={banco} key={banco}>{banco}</option>
                  ))                          
              }
            </select>
            </div>
        </div>

      );
    }
  };



  return (
    <div className="mt-[20px]">
      {credito != null ? (
        <div className="mt-[100px]">
          <h1 className="text-white text-[30px]">Gracias por completar el formulario de credito</h1>
        </div>
      ): (
        <div>
                  <form onSubmit={handleSubmitInfo}>
        <div>
        <div>
        {credito != null  ? (
                      <>
                      <div className="mt-[100px] mx-[50px]">
                      <h1 className="text-white text-[30px]">Gracias por completar el formulario de Credito</h1>
                      </div>
                      </>
                  ): (
                      <div className="mt-[30px] mx-[200px]">
                        <h5 className="text-[30px] text-white my-[30px]">Credito</h5>
                        <div className="text-left my-[10px]">
                          <label className="text-white" htmlFor="">Quiero un credito para</label>
              <select className="w-full py-[2px] rounded" name="credito" key='credito' onChange={(e) =>handleInputChange(e)} id="">
                <option value="">Quiero un credito para</option>
                {
                  creditoPara.map(c => (
                    <option value={c} key={c}>{c}</option>
                    ))                          
                }
              </select>
            </div>
            <div>
            <label className="block text-white" htmlFor="">Tengo tarjeta de credito</label>
        <select value={selectedOptionTarjetaCredito} name=' tarjetaDeCredito' key=' tarjetaDeCredito' onChange={handleOptionChangeTarjetaCredito}>
          <option value="" >Tengo tarjeta de credito</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
        {renderFormTarjetaCredito()}
            </div>
            <div className="text-left my-[10px]">
              <label className="text-white" htmlFor="">Monto del credito</label>
              <input
                className="border-2 w-full rounded"
                onChange={(e) => handleInputChange(e)}
                type="text"
                key="montoCredito"
                name="montoCredito"
                placeholder="Monto del credito"
                value={inputInfo.montoCredito}
              />
            </div>
            <div className="text-left my-[10px]">
             <label className="text-white" htmlFor="">Plazo del credito (en meses)</label>
              <select className="w-full py-[2px] rounded" name="plazoCredito" key='plazoCredito' onChange={(e) =>handleInputChange(e)} id="">
                <option value="">Plazo (meses)</option>
                {
                  plazo.map(p => (
                    <option value={p} key={p}>{p}</option>
                    ))                          
                }
              </select>
            </div>
                      </div>
                  )
                  }
        </div>
  
  
  
  
        <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white mx-[200px]">
              <button type="submit">Actualizar credito</button>
            </div>
  
        </div>
        </form>
        </div>
      )}
    </div>
  );
};




export default Credito;