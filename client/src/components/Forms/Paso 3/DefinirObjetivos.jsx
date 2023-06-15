import React, { useEffect, useState } from "react";
import { getUserById, setUserId } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Gastos from "../Paso2/Gastos";
import MetasFinancieras from "./MetasFinancieras";
import Salud from "./Salud";
import Educacion from "./Educacion";
import ObjetivosRetiro from "./ObjetivosRetiro";


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
    const valorViviendaRetiro = getUserId.valorViviendaRetiro
    return (
      <div className="mt-[50px]ustify-center">
                {plazoVacaciones != null && cuentaConPlanSalud != null && nombreEstudiante1 != null && valorViviendaRetiro!= null  ? (
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
            className={selectedMenuItem === "salud" ? "active" : ""}
            onClick={() => handleMenuItemClick("salud")}
          >
            Salud
          </li>
            </div>

          <div className="mx-[30px]  py-[2px] px-[5px] rounded-sm cursor-pointer text-white">
          <li
            className={selectedMenuItem === "educacion" ? "active" : ""}
            onClick={() => handleMenuItemClick("educacion")}
          >
            Educacion
          </li>
          </div>
          <div className="mx-[30px]  py-[2px] px-[5px] rounded-sm cursor-pointer text-white">
          <li
            className={selectedMenuItem === "gastosRetiro" ? "active" : ""}
            onClick={() => handleMenuItemClick("gastosRetiro")}
          >
            Gastos para mi retiro
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

          {selectedMenuItem === "salud" && 
          <div>
                { cuentaConPlanSalud != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de salud</h1>
                    </div>
                    </>
                ): (
                    <Salud/>
                )
                }
          </div>
          }
          {selectedMenuItem === "educacion" && 
          <div>
                { nombreEstudiante1 != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de educacion</h1>
                    </div>
                    </>
                ): (
                    <Educacion/>
                )
                }
          </div>
          }
          {selectedMenuItem === "gastosRetiro" && 
          <div>
                { valorViviendaRetiro != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de gastos para mi retiro</h1>
                    </div>
                    </>
                ): (
                    <ObjetivosRetiro/>
                )
                }
          </div>
          }
        </div>
                    </div>
                )
                }

      </div>
    );
  };

export default DefinirObjetivos;