import React, { useState } from "react";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderForm = () => {
    if (selectedOption === "form1") {
      return <Form1 />;
    } else if (selectedOption === "form2") {
      return <Form2 />;
    } else if (selectedOption === "form3") {
      return <Form3 />;
    } else {
      return null;
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Seleccione una opción</option>
        <option value="form1">Formulario 1</option>
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

export default DropdownMenu;