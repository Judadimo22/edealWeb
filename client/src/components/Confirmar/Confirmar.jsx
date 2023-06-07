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
        dispatch(confirmarCuenta(userId2)).then(() => {
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
    <div className="bg-white">
      <h1>Confirma tu cuenta</h1>
      <h3>
        Se ha enviado un código de confirmación a tu correo {email}. Por favor,
        digita el código para confirmar tu cuenta.
      </h3>
      <p>{secondsRemaining} segundos restantes</p>
      <h1>{code}</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          type="text"
        />
        <div>
          <button type="submit">Confirmar cuenta</button>
        </div>
      </form>
      {secondsRemaining === 0 && <button>Botón</button>}
    </div>
  );
};

export default Confirmar;

