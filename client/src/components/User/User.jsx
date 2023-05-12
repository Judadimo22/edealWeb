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

 

  return (
    <Link style={{ textDecoration: 'none', color:'black' }} to={`details/${props.user._id}`}>
        <div className={style.containerUser}>
      <div>
      <p className={style.email}><strong>Email:</strong> {Email}</p>
      </div>
      <div>
      <p><strong>Nombre:</strong> {Name}</p>
      </div>
      <div>
      <p><strong>Apellido:</strong> {LastName}</p>
      </div>
      <div>
      <p><strong>Teléfono:</strong> {Phone}</p>
      </div>
    </div>
    </Link>
  );
};

export default User;