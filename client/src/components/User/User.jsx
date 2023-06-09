import React from "react";
import { useDispatch } from "react-redux";
import style from './User.module.css'
import { Link } from "react-router-dom";


const User = (props) => {
  const dispatch = useDispatch();

  const Email = props.user.email;
  const Name = props.user.name;
  const LastName = props.user.lastName;
  const Phone = props.user.phone;
  const Id = props.user.id

 

  return (
    <div className="text-center">
    <Link style={{ textDecoration: 'none', color:'black' }} to={`details/${props.user._id}`}>
        <div className={style.containerUser}>
          <div>
            <h5>{Email}</h5>
          </div>
    </div>
    </Link>
    <Link style={{ textDecoration: 'none', color:'black' }} to={`details/${props.user._id}`}>
        <div className={style.containerUser}>
          <div>
            <h5>{Id}</h5>
          </div>
    </div>
    </Link>
    <Link style={{ textDecoration: 'none', color:'black' }} to={`details/${props.user._id}`}>
        <div className={style.containerUser}>
          <div>
            <h5>Ahorro</h5>
          </div>
    </div>
    </Link>
    </div>
    
  );
};

export default User;