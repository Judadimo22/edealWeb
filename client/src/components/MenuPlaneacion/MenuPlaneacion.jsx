import React, { useEffect, useState } from "react";
import { getUserById, setUserId } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import InfoPersonal from "../Forms/Paso1/InfoPersonal/InfoPersonal";
import ControlFinanzas from "../Forms/Paso2/ControlFinanzas";
import DefinirObjetivos from "../Forms/Paso 3/DefinirObjetivos";
import PerfilRiesgo from "../Forms/paso4/PerfilRiesgo";
import FuentesAdicionalesIngresos from "../Forms/Paso5/FuentesAdicionalesIngresos";

const MenuPlaneacion = () => {
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

    const name = getUserId.name
    const estadoCivilCliente1 = getUserId.estadoCivilCliente1
    const experienciaInversiones = getUserId.experienciaInversiones
    const trabajarMas = getUserId.trabajarMas

    const handleMenuItemClick = (menuItem) => {
      setSelectedMenuItem(menuItem);
    };

    const handleMenuPaso2Click = (menuItem) => {
      setSelectedMenuItem(menuItem);
    };


  
    return (
      <div className="mt-[50px]">
        <ul className="flex justify-center">
            <div className="mx-[30px] bg-[#E8E112] py-[2px] px-[5px] rounded-sm cursor-pointer">
            <li
            className={selectedMenuItem === "paso1" ? "active" : ""}
            onClick={() => handleMenuItemClick("paso1")}
          >
            Paso 1
          </li>
            </div>

          <div className="mx-[30px] bg-[#E8E112] py-[2px] px-[5px] rounded-sm cursor-pointer">
            <li
            className={selectedMenuItem === "paso2" ? "active" : ""}
            onClick={() => handleMenuItemClick("paso2")}
          >
            Paso 2
          </li>
            </div>

          <div className="mx-[30px] bg-[#E8E112] py-[2px] px-[5px] rounded-sm cursor-pointer">
          <li
            className={selectedMenuItem === "paso3" ? "active" : ""}
            onClick={() => handleMenuItemClick("paso3")}
          >
            Paso 3
          </li>
          </div>

          <div className="mx-[30px] bg-[#E8E112] py-[2px] px-[5px] rounded-sm cursor-pointer">
          <li
            className={selectedMenuItem === "paso4" ? "active" : ""}
            onClick={() => handleMenuItemClick("paso4")}
          >
            Paso 4
          </li>
          </div>

          <div className="mx-[30px] bg-[#E8E112] py-[2px] px-[5px] rounded-sm cursor-pointer">
          <li
            className={selectedMenuItem === "paso5" ? "active" : ""}
            onClick={() => handleMenuItemClick("paso5")}
          >
            Paso 5
          </li>
          </div>

        </ul>
        <div>
            <div>
            {selectedMenuItem === "paso1" &&
            <div>
                {estadoCivilCliente1 != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el paso 1</h1>
                    </div>
                    </>
                ): (
                    <InfoPersonal/>
                )
                }
            </div>
             }
            </div>

          {selectedMenuItem === "paso2" && 
          <div>
            <ControlFinanzas/>
          </div>
          }
          {selectedMenuItem === "paso3" && 
          <div>
            <DefinirObjetivos/>
          </div>
          }
            <div>
            {selectedMenuItem === "paso4" &&
            <div>
                {experienciaInversiones != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el paso 4</h1>
                    </div>
                    </>
                ): (
                    <PerfilRiesgo/>
                )
                }
            </div>
             }
            </div>
            <div>
            {selectedMenuItem === "paso5" &&
            <div>
                {trabajarMas != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el paso 5</h1>
                    </div>
                    </>
                ): (
                    <FuentesAdicionalesIngresos/>
                )
                }
            </div>
             }
            </div>
          {selectedMenuItem != "paso5" && selectedMenuItem != "paso4" && selectedMenuItem != "paso3" && selectedMenuItem != "paso2" && selectedMenuItem != "paso1" &&  <h1>Completa el formulario </h1>}
        </div>
      </div>
    );
  };

export default MenuPlaneacion;