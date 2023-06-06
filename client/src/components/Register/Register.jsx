import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../redux/actions";
import Swal from "sweetalert2";
import logo from '../../assets/img/edeal_logo.png'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    phone: "",
    tipoCedula: "",
    emisionCedula: "",
    cedula: "",
    fechaNacimiento: ""
  });

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(inputData));
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Please check your email to confirm your account"
      });
      navigate("/confirmar"); // Redirige al componente Confirmar
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Error",
        text: "An error occurred during registration. Please try again."
      });
    }
  };

  const tipoDocumento = ['Cédula', 'Pasaporte', 'Cédula extranjería'];
    return(
        <div className="bg-[#524898] h-full pb-[20px] pt-[10px] ">
            <div className= 'mx-auto text-center bg-white m-0 py-[100px]'>
            <div className="bg-white">
                <img className="mx-auto my-0" src={logo} alt="" />
            </div>
                <form onSubmit={handleSubmitInfo}>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none" 
                        placeholder="Nombre" 
                        type="text"
                        name="name"
                        key='name'
                        onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none" 
                        placeholder="Apellido" 
                        type="text" 
                        name="lastName"
                        key='lastName'
                        onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none" 
                        placeholder="Email" 
                        type="text" 
                        name="email"
                        key='email'
                        onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none" 
                        placeholder="Teléfono" 
                        type="text"
                        name="phone"
                        key='phone'
                        onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="text-left justify-start w-[300px] relative left-[10px] my-[20px] mx-auto text-gray-600 border-b-[1px] border-gray-600 focus:outline-none select:outline:none">
                        <select className=" w-[300px]" name="tipoCedula" key='tipoCedula' onChange={(e) =>handleInputChange(e)} id="">
                            <option value="">Tipo de documento</option>
                            {
                                tipoDocumento.map(tipo => (
                                    <option value={tipo} key={tipo}>{tipo}</option>
                                ))                          
                            }
                        </select>
                    </div>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none" 
                        placeholder="Número de documento" 
                        type="text" 
                        name="cedula"
                        key='cedula'
                        onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <label className="text-gray-600" htmlFor="">Fecha de emisión de la cédula</label>
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none text-gray-600" 
                        type="date"
                        name="emisionCedula"
                        key='emisionCedula'
                        onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <label className="text-gray-600" htmlFor="">Fecha de nacimiento</label>
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none text-gray-600" 
                        type="date"
                        name="fechaNacimiento"
                        key='fechaNacimiento'
                        onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none" 
                        placeholder="Contraseña" 
                        type="password"
                        key='password'
                        name="password"
                        onChange={(e) => handleInputChange(e)}/>
                    </div>
                    {/* <div className="mx-auto w-[300px] text-left justify-start px-[10px] my-[20px]">
                        <input className="my-[5px] bg-white px-[3px] py-[2px] rounded-sm border-b-[1px] placeholder-gray-600 border-gray-600 w-[300px] focus:outline-none" 
                        placeholder="Confirmar contraseña" 
                        type="password"
                        key='password'
                        name="password"
                        onChange={(e) => handleInputChange(e)} />
                    </div> */}
                    <div className="mt-[20px] bg-[#E8E112] w-[300px] mx-auto text-white relative left-[10px] py-[2px] rounded ">
                        <button type="submit">Registrarse</button>
                    </div>
                    <Link to='/'>
                    <div className="mt-[15px]">
                        <strong>
                        <p className="text-black">Ya tienes cuenta ? <span className="text-[#E8E112]">Inicia sesión</span></p>
                        </strong>
                    </div>
                    </Link>
                </form>
            </div>
        </div>
    )
};

export default Register;