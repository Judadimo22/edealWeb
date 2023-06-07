import React, { useState } from "react";
import GastosHogar from "./Gastos/Hogar";
import GastosTransporte from "./Gastos/Transporte";

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
    } else if (selectedOption === "form3") {
      return <Form3 />;
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
        <option value="form3">Formulario 3</option>
      </select>
      {renderForm()}
    </div>
  );
};



const Form3 = () => {
  return (
    <form>
      <h2>Formulario 3</h2>
      {/* Aquí puedes agregar los campos y elementos del Formulario 3 */}
    </form>
  );
};

export default Gastos;