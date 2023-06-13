import React, { useEffect, useState } from "react";
import { getUserById, setUserId } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Gastos from "../Paso2/Gastos";
import MetasFinancieras from "./MetasFinancieras";


const DefinirObjetivos = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("home");
    const dispatch = useDispatch();
    const [storedUserId, setStoredUserId] = useState(null);
    const getUserId = useSelector((state) => state.Details);
    
  
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


    const handleMenuItemClick = (menuItem) => {
      setSelectedMenuItem(menuItem);
    };

    const plazoVacaciones = getUserId.plazoVacaciones
    const cuentaConPlanSalud = getUserId.cuentaConPlanSalud
    const nombreEstudiante1 = getUserId.nombreEstudiante1
    return (
      <div className="mt-[50px]ustify-center">
                {plazoVacaciones != null && cuentaConPlanSalud != null && nombreEstudiante1 != null  ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el paso 3</h1>
                    </div>
                    </>
                ): (
                    <div>
        <ul className="justify-center flex">
            <div className="mx-[30px] py-[2px] px-[5px] rounded-sm cursor-pointer text-white">
            <li
            className={selectedMenuItem === "metasFinancieras" ? "active" : ""}
            onClick={() => handleMenuItemClick("metasFinancieras")}
          >
            Metas financieras
          </li>
            </div>

          <div className="mx-[30px]  py-[2px] px-[5px] rounded-sm cursor-pointer text-white">
            <li
            className={selectedMenuItem === "ahorros" ? "active" : ""}
            onClick={() => handleMenuItemClick("ahorros")}
          >
            Salud
          </li>
            </div>

          <div className="mx-[30px]  py-[2px] px-[5px] rounded-sm cursor-pointer text-white">
          <li
            className={selectedMenuItem === "gastos" ? "active" : ""}
            onClick={() => handleMenuItemClick("gastos")}
          >
            Gastos
          </li>
          </div>
        </ul>
        <div>
            <div>
            {selectedMenuItem === "metasFinancieras" &&
            <div>
                {plazoVacaciones != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <MetasFinancieras/>
                )
                }
            </div>
             }
            </div>

          {selectedMenuItem === "ahorros" && 
          <div>
                {inversiones != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de metas financieras</h1>
                    </div>
                    </>
                ): (
                    <MetasFinancieras/>
                )
                }
          </div>
          }
          {selectedMenuItem === "gastos" && 
          <Gastos/>
          }
        </div>
                    </div>
                )
                }

      </div>
    );
  };

export default DefinirObjetivos;