import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
  return(
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/users' element={<UsersPage/>}/>
    </Routes>
  );
}

export default App;