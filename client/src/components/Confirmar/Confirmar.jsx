import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { confirmarCuenta, getUserById } from "../../redux/actions";
import { setUserId } from "../../redux/actions";

const Confirmar = () => {
  const dispatch = useDispatch();
  const getUserId = useSelector((state) => state.Details);
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [inputCode, setInputCode] = useState("");
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);

  useEffect(() => {
    dispatch(getUserById(storedUserId));
  }, [dispatch, storedUserId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (secondsRemaining === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [secondsRemaining]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      dispatch(setUserId(storedUserId));
      setStoredUserId(storedUserId);
    }
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    const { code } = getUserId;

    if (inputCode === code) {
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "El código es correcto",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Continuar"
      }).then(() => {
        dispatch(confirmarCuenta(storedUserId)).then(() => {
          navigate(`/dashboard`);
        }).catch(() => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ocurrió un error al confirmar la cuenta",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Continuar"
          });
        });
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El código no coincide o ha expirado",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Continuar"
      });
    }
    
  }

  const { name, code, email } = getUserId;

  return (
    <div className="bg-white my-[100px] py-[100px]">
      <h1 className="text-[20px] mb-[20px]"><strong>Confirma tu cuenta</strong></h1>
      <h3 className="mx-[300px] my-[20px]">
        Se ha enviado un código de confirmación a tu correo <strong>{email}</strong>. Por favor,
        digita el código para confirmar tu cuenta.
      </h3>
      <p>El código expira en <strong>{secondsRemaining} segundos</strong></p>
      <form onSubmit={handleSubmit}>
        <input
        className="my-[20px] border border-gray-500 rounded px-[5px]"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          type="text"
          placeholder="Codigo de confirmacion"
        />
        <div className="bg-[#E8E112] mx-[400px]">
          <button type="submit">Confirmar cuenta</button>
        </div>
      </form>
      {/* {secondsRemaining === 0 && <button>Botón</button>} */}
    </div>
  );
};

export default Confirmar;

