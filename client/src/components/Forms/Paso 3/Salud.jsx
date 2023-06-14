import React, { useEffect, useState } from "react";
import { getUserById, setUserId, updateObjetivosSalud } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Salud = () => {
  const dispatch = useDispatch();
  const [selectedOptionSalud, setSelectedOptionSalud] = useState("");
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    cuentaConPlanSalud: "",
    tipoPlanSalud: "",
    porcentajeCoberturaPlan: ""
  });

  const handleOptionChangeSalud = (e) => {
    setSelectedOptionSalud(e.target.value);
  
    if (e.target.value === "Si") {
      setInputInfo({
        ...inputInfo,
        cuentaConPlanSalud: e.target.value,
      });
    } else {
      setInputInfo({
        ...inputInfo,
        cuentaConPlanSalud: e.target.value,
        tipoPlanSalud: "",
        porcentajeCoberturaPlan: "",
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
        cuentaConPlanSalud: getUserId.cuentaConPlanSalud,
        tipoPlanSalud: getUserId.tipoPlanSalud,
        porcentajeCoberturaPlan: getUserId.porcentajeCoberturaPlan
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
      selectedOptionSalud != 'Si' && selectedOptionSalud != 'No'
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
  
      await dispatch(updateObjetivosSalud(storedUserId, inputInfo));
  
      setInputInfo({
        cuentaConPlanSalud: "",
        tipoPlanSalud: "",
        porcentajeCoberturaPlan: ""
      });
  
      window.location.reload();
    }
  }

  const tipoPlan = ['Publico', 'Privado']
  const porcentajeCobertura = ['0 a 25%', '25 a 50%', '50 a 75%', '100%']


  const renderFormSalud = () => {
    if (selectedOptionSalud === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]">
            <div>
                <label htmlFor="">Que tipo de plan</label>
                <select className="w-full py-[2px] rounded" name="tipoPlanSalud" key='tipoPlanSalud' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Que tipo de plan</option>
              {
                tipoPlan.map(tipo => (
                  <option value={tipo} key={tipo}>{tipo}</option>
                  ))                          
              }
            </select>
            </div>
            <div>
                <label htmlFor="">Que cobertura de sus necesidades de salud cubre este plan</label>
                <select className="w-full py-[2px] rounded" name="porcentajeCoberturaPlan" key='porcentajeCoberturaPlan' onChange={(e) =>handleInputChange(e)} id="">
              <option value="">Porcentaje de coberrura del plan</option>
              {
                porcentajeCobertura.map(porcentaje => (
                  <option value={porcentaje} key={porcentaje}>{porcentaje}</option>
                  ))                          
              }
            </select>
            </div>
        </div>

      );
    }
  };

  const plazoVacaciones = getUserId.plazoVacaciones
  const cuentaConPlanSalud = getUserId.cuentaConPlanSalud

  return (
    <div className="mt-[20px]">
      <form onSubmit={handleSubmitInfo}>
      <div>
      <div>
      {cuentaConPlanSalud != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de Salud</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Salud</h5>
      <select value={selectedOptionSalud} name='cuentaConPlanSalud' key='cuentaConPlanSalud' onChange={handleOptionChangeSalud}>
        <option value="" >Cuenta con un plan de cobertura de salud</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormSalud()}
                    </div>
                )
                }
      </div>




      <div>
        <button type="submit">Update</button>
      </div>

      </div>
      </form>
    </div>
  );
};




export default Salud;