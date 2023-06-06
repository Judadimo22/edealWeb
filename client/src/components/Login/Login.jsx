import React from "react";
import logo from '../../assets/img/edeal_logo.png';
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="bg-[#524898] h-full pb-[20px] pt-[150px] ">
            <div className="">
                <img className="mx-auto" src={logo} alt="" />
            </div>
            <div className= 'mx-auto text-center'>
                <form action=" ">
                    <div className="mx-auto w-[400px]  text-left justify-start px-[10px]">
                        <label  className="block my-[5px] text-white w-[400px]" htmlFor="">Email</label>
                        <input className="w-[400px] my-[5px] bg-white px-[3px] py-[2px] rounded-sm" 
                        placeholder="Nombre" 
                        type="email" 
                        />
                    </div>
                    <div className="mx-auto w-[400px] text-left justify-start px-[10px]">
                        <label className="w-[400px] block my-[5px] text-white" htmlFor="">Contraseña</label>
                        <input className="w-[400px] my-[5px] bg-white px-[3px] py-[2px] rounded-sm" 
                        placeholder="Contraseña"  
                        type="password" />
                    </div>
                    <div className="mt-[20px] bg-[#E8E112] w-[180px] mx-auto text-white px-[5px] py-[2px] rounded ">
                        <button type="submit">Iniciar sesión</button>
                    </div>
                    <Link to='/register'>
                    <div className="mt-[15px]">
                        <strong>
                        <p className="text-white">No tienes cuenta aún ? <span className="text-[#E8E112]">Regístrate</span></p>
                        </strong>
                    </div>
                    </Link>
                </form>
            </div>
        </div>
    )
};

export default Login;