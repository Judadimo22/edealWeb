import React, { useEffect, useState } from "react";
import { getUserById, setUserId, updateMetasFinancieras } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const MetasFinancieras = () => {
  const dispatch = useDispatch();
  const [selectedOptionVacaciones, setSelectedOptionVacaciones] = useState("");
  const [selectedOptionAutomovil, setSelectedOptionAutomovil] = useState("");
  const [selectedOptionEducacion, setSelectedOptionEducacion] = useState("");
  const [selectedOptionInmuebleColombia, setSelectedOptionInmuebleColombia] = useState("");
  const [selectedOptionInmuebleUsa, setSelectedOptionInmuebleUsa] = useState("");
  const [selectedOptionTratamientosMedicos, setSelectedOptionTratamientosMedicos] = useState("");
  const [selectedOptionTecnologia, setSelectedOptionTecnologia] = useState("");
  const [selectedOptionEntretenimiento, setSelectedOptionEntretenimiento] = useState("");
  const [selectedOptionEventosDeportivos, setSelectedOptionEventosDeportivos] = useState("");
  const [selectedOptionOtros, setSelectedOptionOtros] = useState("");
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    plazoVacaciones: "",
    valorVacaciones: "",
    importanciaVacaciones: "",
    plazoAutomovil: "",
    valorAutomovil: "",
    importanciaAutomovil: "",
    plazoEducacion: "",
    valorEducacion: "",
    importanciaEducacion: "",
    plazoInmuebleColombia: "",
    valorInmuebleColombia: "",
    importanciaInmuebleColombia: "",
    plazoInmuebleUsa: "",
    valorInmuebleUsa: "",
    importanciaInmuebleUsa: "",
    plazoTratamientosMedicos: "",
    valorTratamientosMedicos: "",
    importanciaTratamientosMedicos: "",
    plazoTecnologia: "",
    valorTecnologia: "",
    importanciaTecnologia: "",
    plazoEntretenimiento: "",
    valorEntretenimiento: "",
    importanciaEntretenimiento: "",
    plazoEventosDeportivos: "",
    valorEventosDeportivos: "",
    importanciaEventosDeportivos: "",
    plazoOtros: "",
    valorOtros: "",
    importanciaOtros: ""
  });

  const handleOptionChangeVacaciones = (e) => {
    setSelectedOptionVacaciones(e.target.value);
  };

  const handleOptionChangeAutomovil = (e) => {
    setSelectedOptionAutomovil(e.target.value);
  };

  const handleOptionChangeEducacion = (e) => {
    setSelectedOptionEducacion(e.target.value);
  };

  const handleOptionChangeInmuebleColombia = (e) => {
    setSelectedOptionInmuebleColombia(e.target.value);
  };

  const handleOptionChangeInmuebleUsa = (e) => {
    setSelectedOptionInmuebleUsa(e.target.value);
  };

  const handleOptionChangeTratamientosMedicos = (e) => {
    setSelectedOptionTratamientosMedicos(e.target.value);
  };

  const handleOptionChangeTecnologia = (e) => {
    setSelectedOptionTecnologia(e.target.value);
  };

  const handleOptionChangeEntretenimiento = (e) => {
    setSelectedOptionEntretenimiento(e.target.value);
  };

  const handleOptionChangeEventosDeportivos= (e) => {
    setSelectedOptionEventosDeportivos(e.target.value);
  };

  const handleOptionChangeOtros= (e) => {
    setSelectedOptionOtros(e.target.value);
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
      plazoVacaciones: getUserId.plazoVacaciones,
      valorVacaciones: getUserId.valorVacaciones,
      importanciaVacaciones: getUserId.importanciaVacaciones,
      plazoAutomovil: getUserId.plazoAutomovil,
      valorAutomovil: getUserId.valorAutomovil,
      importanciaAutomovil: getUserId.importanciaAutomovil,
      plazoEducacion: getUserId.plazoEducacion,
      valorEducacion: getUserId.valorEducacion,
      importanciaEducacion: getUserId.importanciaEducacion,
      plazoInmuebleColombia: getUserId.plazoInmuebleColombia,
      valorInmuebleColombia: getUserId.valorInmuebleColombia,
      importanciaInmuebleColombia: getUserId.importanciaInmuebleColombia,
      plazoInmuebleUsa: getUserId.plazoInmuebleUsa,
      valorInmuebleUsa: getUserId.valorInmuebleUsa,
      importanciaInmuebleUsa: getUserId.importanciaInmuebleUsa,
      plazoTratamientosMedicos: getUserId.plazoTratamientosMedicos,
      valorTratamientosMedicos: getUserId.valorTratamientosMedicos,
      importanciaTratamientosMedicos: getUserId.importanciaTratamientosMedicos,
      plazoTecnologia: getUserId.plazoTecnologia,
      valorTecnologia: getUserId.valorTecnologia,
      importanciaTecnologia: getUserId.importanciaTecnologia,
      plazoEntretenimiento: getUserId.plazoEntretenimiento,
      valorEntretenimiento: getUserId.valorEntretenimiento,
      importanciaEntretenimiento: getUserId.importanciaEntretenimiento,
      plazoEventosDeportivos: getUserId.plazoEventosDeportivos,
      valorEventosDeportivos: getUserId.valorEventosDeportivos,
      importanciaEventosDeportivos: getUserId.importanciaEventosDeportivos,
      plazoOtros: getUserId.plazoOtros,
      valorOtros: getUserId.valorOtros,
      importanciaOtros: getUserId.importanciaOtros
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
      !inputInfo.plazoVacaciones &&
      !inputInfo.plazoAutomovil &&
      !inputInfo.plazoEducacion &&
      !inputInfo.plazoInmuebleColombia && 
      !inputInfo.plazoInmuebleUsa &&
      !inputInfo.plazoTratamientosMedicos && 
      !inputInfo.plazoTecnologia && 
      !inputInfo.plazoEntretenimiento && 
      !inputInfo.plazoEventosDeportivos &&
      !inputInfo.plazoEventosDeportivos
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
  
      await dispatch(updateMetasFinancieras(storedUserId, inputInfo));
  
      setInputInfo({
        plazoVacaciones: "",
        valorVacaciones: "",
        importanciaVacaciones: "",
        plazoAutomovil: "",
        valorAutomovil: "",
        importanciaAutomovil: "",
        plazoEducacion: "",
        valorEducacion: "",
        importanciaEducacion: "",
        plazoInmuebleColombia: "",
        valorInmuebleColombia: "",
        importanciaInmuebleColombia: "",
        plazoInmuebleUsa: "",
        valorInmuebleUsa: "",
        importanciaInmuebleUsa: "",
        plazoTratamientosMedicos: "",
        valorTratamientosMedicos: "",
        importanciaTratamientosMedicos: "",
        plazoTecnologia: "",
        valorTecnologia: "",
        importanciaTecnologia: "",
        plazoEntretenimiento: "",
        valorEntretenimiento: "",
        importanciaEntretenimiento: "",
        plazoEventosDeportivos: "",
        valorEventosDeportivos: "",
        importanciaEventosDeportivos: "",
        plazoOtros: "",
        valorOtros: "",
        importanciaOtros: ""
      });
  
      window.location.reload();
    }
  }


  const renderFormVacaciones = () => {
    if (selectedOptionVacaciones === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoVacaciones"
      name="plazoVacaciones"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoVacaciones}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorVacaciones"
      name="valorVacaciones"
      placeholder="Valor de la meta"
      value={inputInfo.valorVacaciones}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaVacaciones"
      name="importanciaVacaciones"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaVacaciones}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormAutomovil = () => {
    if (selectedOptionAutomovil === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoAutomovil"
      name="plazoAutomovil"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoAutomovil}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorAutomovil"
      name="valorAutomovil"
      placeholder="Valor de la meta"
      value={inputInfo.valorAutomovil}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaAutomovil"
      name="importanciaAutomovil"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaAutomovil}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormEducacion = () => {
    if (selectedOptionEducacion === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoEducacion"
      name="plazoEducacion"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoEducacion}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorEducacion"
      name="valorEducacion"
      placeholder="Valor de la meta"
      value={inputInfo.valorEducacion}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaEducacion"
      name="importanciaEducacion"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaEducacion}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormInmuebleColombia = () => {
    if (selectedOptionInmuebleColombia === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoInmuebleColombia"
      name="plazoInmuebleColombia"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoInmuebleColombia}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorInmuebleColombia"
      name="valorInmuebleColombia"
      placeholder="Valor de la meta"
      value={inputInfo.valorInmuebleColombia}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaInmuebleColombia"
      name="importanciaInmuebleColombia"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaInmuebleColombia}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormInmuebleUsa = () => {
    if (selectedOptionInmuebleUsa === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoInmuebleUsa"
      name="plazoInmuebleUsa"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoInmuebleUsa}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorInmuebleUsa"
      name="valorInmuebleUsa"
      placeholder="Valor de la meta"
      value={inputInfo.valorInmuebleUsa}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaInmuebleUsa"
      name="importanciaInmuebleUsa"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaInmuebleUsa}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormTratamientosMedicos = () => {
    if (selectedOptionTratamientosMedicos === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoTratamientosMedicos"
      name="plazoTratamientosMedicos"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoTratamientosMedicos}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorTratamientosMedicos"
      name="valorTratamientosMedicos"
      placeholder="Valor de la meta"
      value={inputInfo.valorTratamientosMedicos}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaTratamientosMedicos"
      name="importanciaTratamientosMedicos"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaTratamientosMedicos}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormTencnologia = () => {
    if (selectedOptionTecnologia === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoTecnologia"
      name="plazoTecnologia"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoTecnologia}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorTecnologia"
      name="valorTecnologia"
      placeholder="Valor de la meta"
      value={inputInfo.valorTecnologia}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaTecnologia"
      name="importanciaTecnologia"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaTecnologia}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormEntretenimiento = () => {
    if (selectedOptionEntretenimiento === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoEntretenimiento"
      name="plazoEntretenimiento"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoEntretenimiento}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorEntretenimiento"
      name="valorEntretenimiento"
      placeholder="Valor de la meta"
      value={inputInfo.valorEntretenimiento}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaEntretenimiento"
      name="importanciaEntretenimiento"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaEntretenimiento}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormEventosDeportivos = () => {
    if (selectedOptionEventosDeportivos === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoEventosDeportivos"
      name="plazoEventosDeportivos"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoEventosDeportivos}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorEventosDeportivos"
      name="valorEventosDeportivos"
      placeholder="Valor de la meta"
      value={inputInfo.valorEventosDeportivos}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaEventosDeportivos"
      name="importanciaEventosDeportivos"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaEventosDeportivos}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const renderFormOtros = () => {
    if (selectedOptionOtros === "Si") {
      return (
        <div className="mt-[10px] mx-[30px] mb-[20px]"> 
            <div>
<div className="px-[300px]">
<div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Plazo de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="plazoOtros"
      name="plazoOtros"
      placeholder="PLazo de la meta"
      value={inputInfo.plazoOtros}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Valor de la meta</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="valorOtros"
      name="valorOtros"
      placeholder="Valor de la meta"
      value={inputInfo.valorOtros}
    />
  </div>
  <div className="text-left my-[2px]">
    <label className="text-white" htmlFor="">Nivel de importancia</label>
    <input
      className="border-2 w-full rounded"
      onChange={(e) => handleInputChange(e)}
      type="text"
      key="importanciaOtros"
      name="importanciaOtros"
      placeholder="Nivel de importancia"
      value={inputInfo.importanciaOtros}
    />
  </div>
</div>
  </div>    
</div>
      );
    }
  };

  const plazoVacaciones = getUserId.plazoVacaciones

  return (
    <div className="mt-[20px]">
      <form onSubmit={handleSubmitInfo}>
      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Vacaciones</h5>
      <select value={selectedOptionVacaciones} onChange={handleOptionChangeVacaciones}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormVacaciones()}
                    </div>
                )
                }
      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Automovil</h5>
      <select value={selectedOptionAutomovil} onChange={handleOptionChangeAutomovil}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormAutomovil()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Educacion</h5>
      <select value={selectedOptionEducacion} onChange={handleOptionChangeEducacion}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormEducacion()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Inmueble en Colombia</h5>
      <select value={selectedOptionInmuebleColombia} onChange={handleOptionChangeInmuebleColombia}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormInmuebleColombia()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Inmueble en Usa</h5>
      <select value={selectedOptionInmuebleUsa} onChange={handleOptionChangeInmuebleUsa}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormInmuebleUsa()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Tratamientos médicos y estéticos</h5>
      <select value={selectedOptionTratamientosMedicos} onChange={handleOptionChangeTratamientosMedicos}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormTratamientosMedicos()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Tecnología</h5>
      <select value={selectedOptionTecnologia} onChange={handleOptionChangeTecnologia}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormTencnologia()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Entretenimiento, conciertos y festivales</h5>
      <select value={selectedOptionEntretenimiento} onChange={handleOptionChangeEntretenimiento}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormEntretenimiento()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Eventos deportivos internacionales</h5>
      <select value={selectedOptionEventosDeportivos} onChange={handleOptionChangeEventosDeportivos}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormEventosDeportivos()}
                    </div>
                )
                }
      </div>

      <div>
      {plazoVacaciones != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <div>
                      <h5>Otros</h5>
      <select value={selectedOptionOtros} onChange={handleOptionChangeOtros}>
        <option value="">Selecciona el formulario que deseas completar</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      {renderFormOtros()}
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




export default MetasFinancieras;




