import React, { useState } from "react";
import GastosHogar from "./Gastos/Hogar";
import GastosTransporte from "./Gastos/Transporte";
import GastosEntretenimiento from "./Gastos/Entretenimiento";

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
      </select>
      {renderForm()}
    </div>
  );
};




export default Gastos;