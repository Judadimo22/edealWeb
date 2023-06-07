import React, { useEffect, useState } from "react";
import { getUserById, setUserId } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Ingresos from "./Ingresos";
import Ahorros from "./Ahorros";
import Gastos from "./Gastos";

const ControlFinanzas = () => {
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
    const salario = getUserId.salario
    const inversiones = getUserId.inversiones

    const handleMenuItemClick = (menuItem) => {
      setSelectedMenuItem(menuItem);
    };

    const handleMenuPaso2Click = (menuItem) => {
      setSelectedMenuItem(menuItem);
    };


  
    return (
      <div className="mt-[50px]ustify-center">
        <ul className="justify-center flex">
            <div className="mx-[30px] py-[2px] px-[5px] rounded-sm cursor-pointer text-white">
            <li
            className={selectedMenuItem === "ingresos" ? "active" : ""}
            onClick={() => handleMenuItemClick("ingresos")}
          >
            Ingresos
          </li>
            </div>

          <div className="mx-[30px]  py-[2px] px-[5px] rounded-sm cursor-pointer text-white">
            <li
            className={selectedMenuItem === "ahorros" ? "active" : ""}
            onClick={() => handleMenuItemClick("ahorros")}
          >
            Ahorros
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
            {selectedMenuItem === "ingresos" &&
            <div>
                {salario != null ? (
                    <>
                    <div className="mt-[100px] mx-[50px]">
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de ingresos</h1>
                    </div>
                    </>
                ): (
                    <Ingresos/>
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
                    <h1 className="text-white text-[30px]">Gracias por completar el formulario de ahorros</h1>
                    </div>
                    </>
                ): (
                    <Ahorros/>
                )
                }
          </div>
          }
          {selectedMenuItem === "gastos" && 
          <Gastos/>
          }
          {/* {selectedMenuItem != "paso3" && selectedMenuItem != "paso2" && selectedMenuItem != "paso1" &&  <h1>Completa el formulario </h1>} */}
        </div>
      </div>
    );
  };

export default ControlFinanzas;