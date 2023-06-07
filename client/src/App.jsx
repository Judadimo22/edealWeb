import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Confirmar from './components/Confirmar/Confirmar';
import DashBoard from './pages/DashBoard/DashBoard';
import PlaneacionPage from './pages/PlaneacionPage/PlaneacionPage';



function App() {
  return(
    <Routes>
      <Route exact path='/' element={<Register/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path= '/confirmar' element={<Confirmar/>}/>
      <Route exact path= '/dashboard' element={<DashBoard/>}/>
      <Route exact path= '/planeacionFinanciera' element={<PlaneacionPage/>}/>
    </Routes>
  );
}

export default App;