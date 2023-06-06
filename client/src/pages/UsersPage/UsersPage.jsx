import React from "react";
import Users from "../../components/Users/Users";
import edeal_logo from '../../assets/img/edeal_logo.png';
import style from './UsersPage.module.css'

const UsersPage = () => {
    return(
        <div >
            <div className="flex justify-center text-center mb-[10px] mt-[10px]">
                <img className="h-auto" src={edeal_logo} alt="" />
            </div>
            <div>
                <Users/>
            </div>
        </div>
    )
};

export default UsersPage;