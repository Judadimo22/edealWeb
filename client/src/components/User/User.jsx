import React from "react";
import { useDispatch } from "react-redux";


const User = (props) => {
  const dispatch = useDispatch();

  const Email = props.user.email;
 

  return (
    <div>
      <p>{Email}</p>
    </div>
  );
};

export default User;