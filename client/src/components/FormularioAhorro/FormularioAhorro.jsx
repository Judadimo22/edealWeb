import React, { useEffect, useState } from "react";
import { getUserById, setUserId, updateAhorro} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Ahorro = () => {
  const dispatch = useDispatch();
  const [selectedOptionOtro, setSelectedOptionOtro] = useState("");
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    ahorroPara: "",
    valorAhorro: "",
    plazoAhorro: "",
    metaAhorro: "",
  });

  const handleOptionChangeOtro = (e) => {
    setSelectedOptionOtro(e.target.value);
  
    if (e.target.value === "Otro") {
      setInputInfo({
        ...inputInfo,
        ahorroPara: e.target.value,
      });
    } else {
      setInputInfo({
        ...inputInfo,
        ahorroPara: e.target.value,
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
      ahorroPara: getUserId.ahorroPara,
      valorAhorro: getUserId.valorAhorro,
      plazoAhorro: getUserId.plazoAhorro,
      metaAhorro: getUserId.metaAhorro,
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
      !inputInfo.ahorroPara ||
      !inputInfo.valorAhorro ||
      !inputInfo.plazoAhorro 
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
  
      await dispatch(updateAhorro(storedUserId, inputInfo));
  
      setInputInfo({
        ahorroPara: "",
        valorAhorro: "",
        plazoAhorro: "",
        metaAhorro: "",
      });
  
      window.location.reload();
    }
  }

  const tipoPlan = ['Publico', 'Privado']
  const porcentajeCobertura = ['0 a 25%', '25 a 50%', '50 a 75%', '100%']
  const ahorroPara = getUserId.ahorroPara
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
    '20',
    '21',
    '22',
    '23',
    '24'
  ]


  const renderFormOtro = () => {
    if (selectedOptionOtro === "otro") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]">
            <div className="text-left my-[10px]">
              <input
                className="border-2 w-full rounded"
                onChange={(e) => handleInputChange(e)}
                type="text"
                key="ahorroPara"
                name="ahorroPara"
                placeholder="Ahorro para"
                value={inputInfo.ahorroPara}
              />
            </div>
        </div>

      );
    }
  };



  return (
    <div className="mt-[20px]">
      {ahorroPara != null ? (
        <div className="mt-[100px]">
          <h1 className="text-white text-[30px]">Gracias por completar el formulario de ahorro</h1>
        </div>
      ): (
        <div>
                  <form onSubmit={handleSubmitInfo}>
        <div>
        <div>
        {ahorroPara != null  ? (
                      <>
                      <div className="mt-[100px] mx-[50px]">
                      <h1 className="text-white text-[30px]">Gracias por completar el formulario de Credito</h1>
                      </div>
                      </>
                  ): (
                      <div className="mt-[30px] mx-[200px]">
                        <h5 className="text-[30px] text-white my-[30px]">Ahorro</h5>
            <div>
            <label className="block text-white" htmlFor="">Quiero ahorrar para</label>
        <select value={selectedOptionOtro} name=' ahorroPara' key=' ahorroPara' onChange={handleOptionChangeOtro}>
          <option value="" >Quiero ahorrar para</option>
          <option value="viaje">Viaje</option>
          <option value="celular">Celular</option>
          <option value="evento">Evento</option>
          <option value="carro">Carro</option>
          <option value="otro">Otro</option>
        </select>
        {renderFormOtro()}
            </div>
            <div className="text-left my-[10px]">
              <label className="text-white" htmlFor="">Valor del ahorro</label>
              <input
                className="border-2 w-full rounded"
                onChange={(e) => handleInputChange(e)}
                type="text"
                key="valorAhorro"
                name="valorAhorro"
                placeholder="Valor del ahorro"
                value={inputInfo.valorAhorro}
              />
            </div>
            <div className="text-left my-[10px]">
             <label className="text-white" htmlFor="">PLazo del ahorro(en meses)</label>
              <select className="w-full py-[2px] rounded" name="plazoAhorro" key='plazoAhorro' onChange={(e) =>handleInputChange(e)} id="">
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
              <button type="submit">Actualizar ahorro</button>
            </div>
  
        </div>
        </form>
        </div>
      )}
    </div>
  );
};




export default Ahorro;