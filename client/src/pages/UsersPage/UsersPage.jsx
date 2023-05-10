import React from "react";
import Users from "../../components/Users/Users";
import edeal_logo from '../../assets/img/edeal_logo.png';
import style from './UsersPage.module.css'

const UsersPage = () => {
    return(
        <div className={style.containerUsers}>
            <div className={style.containerImage}>
                <img className="h-[300px]" src={edeal_logo} alt="" />
            </div>
            <div>
                <Users/>
            </div>
        </div>
    )
};

export default UsersPage;