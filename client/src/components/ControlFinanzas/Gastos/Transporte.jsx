

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getUserById,updateAhorrosPaso2  } from "../../../redux/actions";
import Swal from "sweetalert2";

const Transporte = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const getUserId = useSelector((state) => state.Details);
  const [inputInfo, setInputInfo] = useState({
    aportesEmergencia: "",
    aportesAhorro: "",
    aportesRetiro: '',
    inversiones: "",
    otrosAhorros: "",
  }) 

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id]);

  useEffect(() => {
    setInputInfo({
      aportesEmergencia: getUserId.aportesEmergencia,
      aportesAhorro: getUserId.aportesAhorro,
      aportesRetiro: getUserId.aportesRetiro,
      inversiones: getUserId.inversiones,
      otrosAhorros: getUserId.otrosAhorros,
    });
  }, [getUserId]);

  function handleInputChange(e) {
    e.preventDefault();
    setInputInfo({
      ...inputInfo,
      [e.target.name]: e.target.value,
    });
  }



  function handleSubmitInfo(e){
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: '¡Success!',
      text: 'The new info has been updated',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continue'
    })
    dispatch(updateAhorrosPaso2(id, inputInfo));
    setInputInfo({
      aportesEmergencia: e.target.value,
      aportesAhorro: e.target.value,
      aportesRetiro: e.target.value,
      inversiones: e.target.value,
      otrosAhorros: e.target.value,
    });
    navigate(`/controlFinanzas/${id}`); 
  }



  return (
    <div>
        <form onSubmit={handleSubmitInfo}>
          <div className="text-center">
            <h1 className="text-[40px]">
              Mis gastos en transporte
            </h1>
          </div>
          <div>
            <div>
            <label htmlFor="">Aportes mis fondos de emergencia</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="num"
              key="aportesEmergencia"
              name="aportesEmergencia"
              value={inputInfo.aportesEmergencia}
            />
          </div>
          <div>
            <label htmlFor="">Aportes a mi fondo de ahorro</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="num"
              key="aportesAhorro"
              name="aportesAhorro"
              value={inputInfo.aportesAhorro}
            />
          </div>
          <div>
            <label htmlFor="">Aportes a mi fondo de retiro</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="num"
              key="aportesRetiro"
              name="aportesRetiro"
              value={inputInfo.aportesRetiro}
            />
          </div>
          <div>
            <label htmlFor="">Inversiones</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="num"
              key="inversiones"
              name="inversiones"
              value={inputInfo.inversiones}
            />
          </div>
          <div>
            <label htmlFor="">Otros ahorros</label>
            <input
              className="border-2 w-full"
              onChange={(e) => handleInputChange(e)}
              type="num"
              key="otrosAhorros"
              name="otrosAhorros"
              value={inputInfo.otrosAhorros}
            />
          </div>
          <div className="text-center justify-center  mt-[10px] bg-blue-800 py-[2px] text-white">
            <button type="submit">
              Update info
            </button>
          </div>
          </div>
        </form>
    </div>
  );
};

export default Transporte;