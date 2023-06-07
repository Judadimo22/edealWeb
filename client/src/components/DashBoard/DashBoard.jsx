import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../../redux/actions";

const DashBoard = () => {
  const dispatch = useDispatch();
  const [storedUserId, setStoredUserId] = useState(null);
  const getUserId = useSelector((state) => state.Details);

  useEffect(() => {
    // Recuperar userId del almacenamiento local al cargar el componente
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      dispatch(setUserId(storedUserId));
      setStoredUserId(storedUserId);
    }
  }, [dispatch]);


  return (
    <div>
      <h1>{storedUserId}</h1>
    </div>
  );
};

export default DashBoard;

