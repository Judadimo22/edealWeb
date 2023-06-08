import React, { useEffect, useState } from "react";
import GastosHogar from "./Gastos/Hogar";
import GastosTransporte from "./Gastos/Transporte";
import GastosEntretenimiento from "./Gastos/Entretenimiento";
import GastosFinancieros from "./Gastos/Financieros";
import Vacaciones from "./Gastos/Vacaciones";
import Impuestos from "./Gastos/Impuestos";
import GastosCreditos from "./Gastos/Creditos";
import { getUserById, setUserId } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Gastos = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
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
    dispatch(getUserById(storedUserId));
  }, [storedUserId]);

  const renderForm = () => {
    if (selectedOption === "gastosHogar") {
      return <GastosHogar />;
    } else if (selectedOption === "gastosTransporte") {
      return <GastosTransporte />;
    } else if (selectedOption === "gastosEntretenimiento") {
      return <GastosEntretenimiento />;
    } else if (selectedOption === "gastosFinancieros"){
      return<GastosFinancieros/>;
    } else if (selectedOption === "gastosVacaciones") {
      return<Vacaciones/>
    } else if (selectedOption === "gastosImpuestos"){
      return<Impuestos/>
    } else if (selectedOption ==="gastosCredito"){
      return<GastosCreditos/>
    } else {
      return null;
    }
  };

  const planCelular = getUserId.planCelular
  const cuotaCarro = getUserId.cuotaCarro
  const cine = getUserId.cine
  const seguroSalud = getUserId.seguroSalud
  const hoteles = getUserId.hoteles
  const predial = getUserId.predial
  const tipoDeudaGastosCredito = getUserId.tipoDeudaGastosCredito

  return (
    <div className="mt-[20px]">
                {planCelular != null && cuotaCarro != null && cine != null && seguroSalud != null && hoteles != null && predial != null && tipoDeudaGastosCredito != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos</h1>
                    </div>
                    </>
                ): (
                    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="gastosHogar">Gastos del hogar</option>
        <option value="gastosTransporte">Gastos de transporte</option>
        <option value="gastosEntretenimiento">Gastos en entretenimiento</option>
        <option value="gastosFinancieros">Gastos financieros</option>
        <option value="gastosVacaciones">Gastos en vacaciones</option>
        <option value="gastosImpuestos">Gastos en impuestos</option>
        <option value="gastosCredito">Gastos en creditos</option>
      </select>
      {renderForm()}
                    </div>
                )
                }

    </div>
  );
};




export default Gastos;