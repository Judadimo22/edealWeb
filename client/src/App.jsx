import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage';
import UpdateInfo from './components/Details/Details';
import ControlFinanzas from './components/ControlFinanzas/ControlFinanzas';
import Ahorros from './components/ControlFinanzas/Ahorros/Ahorros';
import Ingresos from './components/ControlFinanzas/Ingresos/Ingresos';
import Gastos from './components/ControlFinanzas/Gastos/Gastos';
import Hogar from './components/ControlFinanzas/Gastos/Hogar';
import Transporte from './components/ControlFinanzas/Gastos/Transporte';
import Entretenimiento from './components/ControlFinanzas/Gastos/Entretenimiento';
import DefinirObjetivos from './components/DefinirObjetivos/DefinirObjetivos';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Confirmar from './components/Confirmar/Confirmar';
import DashBoard from './components/DashBoard/DashBoard';


function App() {
  return(
    <Routes>
      <Route exact path='/' element={<Register/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path= '/details/:id' element={<UpdateInfo/>}/>
      <Route exact path= '/controlFinanzas/:id' element={<ControlFinanzas/>}/>
      <Route exact path= '/ahorros/:id' element={<Ahorros/>}/>
      <Route exact path= '/ingresos/:id' element={<Ingresos/>}/>
      <Route exact path= '/gastos/:id' element={<Gastos/>}/>
      <Route exact path= '/gastosHogar/:id' element={<Hogar/>}/>
      <Route exact path= '/gastosTransporte/:id' element={<Transporte/>}/>
      <Route exact path= '/gastosEntretenimiento/:id' element={<Entretenimiento/>}/>
      <Route exact path= '/definirObjetivos/:id' element={<DefinirObjetivos/>}/>
      <Route exact path= '/confirmar' element={<Confirmar/>}/>
      <Route exact path= '/dashboard' element={<DashBoard/>}/>
    </Routes>
  );
}

export default App;