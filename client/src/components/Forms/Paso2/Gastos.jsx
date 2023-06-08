import React, { useState } from "react";
import GastosHogar from "./Gastos/Hogar";
import GastosTransporte from "./Gastos/Transporte";
import GastosEntretenimiento from "./Gastos/Entretenimiento";
import GastosFinancieros from "./Gastos/Financieros";
import Vacaciones from "./Gastos/Vacaciones";
import Impuestos from "./Gastos/Impuestos";

const Gastos = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

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
    } else {
      return null;
    }
  };

  return (
    <div className="mt-[20px]">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="gastosHogar">Gastos del hogar</option>
        <option value="gastosTransporte">Gastos de transporte</option>
        <option value="gastosEntretenimiento">Gastos en entretenimiento</option>
        <option value="gastosFinancieros">Gastos financieros</option>
        <option value="gastosVacaciones">Gastos en vacaciones</option>
        <option value="gastosImpuestos">Gastos en impuestos</option>
      </select>
      {renderForm()}
    </div>
  );
};




export default Gastos;