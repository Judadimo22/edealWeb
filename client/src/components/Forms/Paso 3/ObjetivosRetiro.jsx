import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById,setUserId, updateObjetivosRetiro } from "../../../redux/actions/index";
import Swal from "sweetalert2";

const ObjetivosRetiro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    valorViviendaRetiro: "",
    importanciaViviendaRetiro: "",
    valorViajesRetiro: "",
    importanciaViajesRetiro: "",
    valorSaludRetiro: "",
    importanciaSaludRetiro: "",
    valorDependientesRetiro: "",
    importanciaDependientesRetiro: "",
    valorOtrosRetiro: "",
    importanciaOtrosRetiro: ""
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
    setInputInfo({
      valorViviendaRetiro: getUserId.valorViviendaRetiro,
      importanciaViviendaRetiro: getUserId.importanciaViviendaRetiro,
      valorViajesRetiro: getUserId.valorViajesRetiro,
      importanciaViajesRetiro: getUserId.importanciaViajesRetiro,
      valorSaludRetiro: getUserId.valorSaludRetiro,
      importanciaSaludRetiro: getUserId.importanciaSaludRetiro,
      valorDependientesRetiro: getUserId.valorDependientesRetiro,
      importanciaDependientesRetiro: getUserId.importanciaDependientesRetiro,
      valorOtrosRetiro: getUserId.valorOtrosRetiro,
      importanciaOtrosRetiro: getUserId.importanciaOtrosRetiro
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
      !inputInfo.valorViviendaRetiro ||
      !inputInfo.importanciaViviendaRetiro ||
      !inputInfo.valorViajesRetiro ||
      !inputInfo.importanciaViajesRetiro ||
      !inputInfo.valorSaludRetiro ||
      !inputInfo.importanciaSaludRetiro ||
      !inputInfo.valorDependientesRetiro ||
      !inputInfo.importanciaDependientesRetiro ||
      !inputInfo.valorOtrosRetiro ||
      !inputInfo.importanciaOtrosRetiro
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
  
      await dispatch(updateObjetivosRetiro(storedUserId, inputInfo));
  
      setInputInfo({
        valorViviendaRetiro: "",
        importanciaViviendaRetiro: "",
        valorViajesRetiro: "",
        importanciaViajesRetiro: "",
        valorSaludRetiro: "",
        importanciaSaludRetiro: "",
        valorDependientesRetiro: "",
        importanciaDependientesRetiro: "",
        valorOtrosRetiro: "",
        importanciaOtrosRetiro: ""
      });
  
      window.location.reload();
    }
  }

  const tipoInstitucionEducativa = ['Publico', 'Privado'];
  const ubicacion = ['Dentro de mi ciudad', 'Fuera de mi ciudad', 'Fuera de mi país']
  const numeroHijos = getUserId.numeroHijos 


  return (
    <div className="mt-[30px]">
        <form onSubmit={handleSubmitInfo}>
        <div className="text-center mb-[20px]">
          <h1 className="text-[30px] text-white">Objetivos para mi retiro</h1>
        </div>
        <div className="px-[300px]">
          <div>
            <h6>Vivienda</h6>
          </div>
        <div className="text-left my-[10px]">
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="valorViviendaRetiro"
              name="valorViviendaRetiro"
              placeholder="Valor de la meta"
              value={inputInfo.valorViviendaRetiro}
            />
          </div>
          <div className="text-left my-[10px]">
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="importanciaViviendaRetiro"
              name="importanciaViviendaRetiro"
              placeholder="Importancia de la meta"
              value={inputInfo.importanciaViviendaRetiro}
            />
          </div>
          <div>
            <h6>Viajes</h6>
          </div>
          <div className="text-left my-[10px]">
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="valorViajesRetiro"
              name="valorViajesRetiro"
              placeholder="Valor de la meta "
              value={inputInfo.valorViajesRetiro}
            />
          </div>
          <div className="text-left my-[10px]">
            <input
              className="border-2 w-full rounded"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="importanciaViajesRetiro"
              name="importanciaViajesRetiro"
              placeholder="Importancia de la meta"
              value={inputInfo.importanciaViajesRetiro}
            />
          </div>
          <div>
            <h6>Salud</h6>
          </div>
          <div className="text-left  my-[10px]">
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="valorSaludRetiro"
              name="valorSaludRetiro"
              placeholder="Valor de la meta"
              value={inputInfo.valorSaludRetiro}
            />
          </div>
          <div className="text-left  my-[10px]">
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="importanciaSaludRetiro"
              name="importanciaSaludRetiro"
              placeholder="Importancia de la meta"
              value={inputInfo.importanciaSaludRetiro}
            />
          </div>
          <div>
            <h6>Dependientes</h6>
          </div>
          <div className="text-left  my-[10px]">
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="valorDependientesRetiro"
              name="valorDependientesRetiro"
              placeholder="Valor de la meta"
              value={inputInfo.valorDependientesRetiro}
            />
          </div>
          <div className="text-left  my-[10px]">
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="importanciaDependientesRetiro"
              name="importanciaDependientesRetiro"
              placeholder="Importancia de la meta"
              value={inputInfo.importanciaDependientesRetiro}
            />
          </div>
          <div>
            <h6>Otros</h6>
          </div>
          <div className="text-left  my-[10px]">
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="valorOtrosRetiro"
              name="valorOtrosRetiro"
              placeholder="Valor de la meta"
              value={inputInfo.valorOtrosRetiro}
            />
          </div>
          <div className="text-left  my-[10px]">
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="text"
              key="importanciaOtrosRetiro"
              name="importanciaOtrosRetiro"
              placeholder="Importancia de la meta"
              value={inputInfo.importanciaOtrosRetiro}
            />
          </div>
          <div className="text-center justify-center rounded my-[20px] bg-[#E8E112] py-[2px] text-white">
            <button type="submit">Actualizar objetivos para mi retiro</button>
          </div>
        </div>
      </form>    
    </div>
  );
};

export default ObjetivosRetiro;