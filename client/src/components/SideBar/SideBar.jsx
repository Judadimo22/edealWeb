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
        <div>
            <div>
                <Link to='/dashboard'>
                <img className="mx-auto" src={logo} alt="" />
                </Link>
            </div>
            <div className="text-white text-[20px]">Bienvenido {name}</div>
            <div>
                <Link to = '/planeacionFinanciera'>
                <h1>Planeacion financiera</h1>
                </Link>
            </div>
            <div>
                Credito
            </div>
            <div>
                Ahorro
            </div>
        </div>
    )
};

export default SideBar;