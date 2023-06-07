import React, { useState } from "react";
import GastosHogar from "./Gastos/Hogar";

const Gastos = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderForm = () => {
    if (selectedOption === "gastosHogar") {
      return <GastosHogar />;
    } else if (selectedOption === "form2") {
      return <Form2 />;
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
        <option value="form2">Formulario 2</option>
        <option value="form3">Formulario 3</option>
      </select>
      {renderForm()}
    </div>
  );
};

const Form1 = () => {
  return (
    <form>
      <h2>Formulario 1</h2>
      {/* Aquí puedes agregar los campos y elementos del Formulario 1 */}
    </form>
  );
};

const Form2 = () => {
  return (
    <form>
      <h2>Formulario 2</h2>
      {/* Aquí puedes agregar los campos y elementos del Formulario 2 */}
    </form>
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