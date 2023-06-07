import React, { useEffect, useState } from "react";
import logo from '../../assets/img/edeal_logo.png';
import { useDispatch, useSelector } from "react-redux";
import { setUserId, getUserById } from "../../redux/actions";
import { Link } from "react-router-dom";

const SideBar = () => {
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
    return(
        <div className="mt-[30px] border-r-2 border-white h-full">
            <div className="mb-[20px]">
                <Link to='/dashboard'>
                <img className="mx-auto" src={logo} alt="" />
                </Link>
            </div>
            <div className="text-white text-[20px] mb-[100px]">Bienvenido {name}</div>
            <div>
            <div className="my-[10px] text-white">
                <Link to = '/planeacionFinanciera'>
                <h1>Planeacion financiera</h1>
                </Link>
            </div>
            <div className="my-[10px] text-white">
                Credito
            </div>
            <div className="my-[10px] text-white">
                Ahorro
            </div>
            </div>
        </div>
    )
};

export default SideBar;