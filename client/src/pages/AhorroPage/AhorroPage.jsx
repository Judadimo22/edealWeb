import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../../redux/actions";
import SideBar from "../../components/SideBar/SideBar";
import Credito from "../../components/Credito/Credito";
import Ahorro from "../../components/FormularioAhorro/FormularioAhorro";


const AhorroPage = () => {
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




  return (
    <div className="flex mt-[20px]">
      <div className="w-[25%]">
        <SideBar/>
      </div>
      <div className="w-[75%]">
        <Ahorro/>
      </div>
    </div>
  );
};

export default AhorroPage;