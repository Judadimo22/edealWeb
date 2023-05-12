import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage';
import { Details } from './components/Details/Details';

function App() {
  return(
    <Routes>
      <Route exact path='/' element={<UsersPage/>}/>
      <Route exact path= '/details/:id' element={<Details/>}/>
    </Routes>
  );
}

export default App;