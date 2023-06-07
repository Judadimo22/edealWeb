import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';
import logo from '../../assets/img/edeal_logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password)).then((response) => {
          if (response && response.success === true && response.userExists === true) {
            navigate('/dashboard');
          } else {
            // Mostrar una alerta o mensaje de error indicando que el inicio de sesión no fue exitoso
            alert('Correo o contraseña incorrectos');
          }
        });
      };
  return (
    <div className="bg-[#524898] h-full pb-[20px] pt-[150px] ">
      <div className="">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className='mx-auto text-center'>
        <form onSubmit={handleLogin}>
          <div className="mx-auto w-[400px]  text-left justify-start px-[10px]">
            <label className="block my-[5px] text-white w-[400px]" htmlFor="email">Email</label>
            <input
              className="w-[400px] my-[5px] bg-white px-[3px] py-[2px] rounded-sm"
              placeholder="Nombre"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mx-auto w-[400px] text-left justify-start px-[10px]">
            <label className="w-[400px] block my-[5px] text-white" htmlFor="password">Contraseña</label>
            <input
              className="w-[400px] my-[5px] bg-white px-[3px] py-[2px] rounded-sm"
              placeholder="Contraseña"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
  );
};

export default Login;

