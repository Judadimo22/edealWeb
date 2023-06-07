import axios from "axios";
import jwtDecode from 'jwt-decode';

export const GET_USERS = 'GET_USERS';
export const GET_BY_ID = 'GET_BY_ID';
export const UPDATE_INFO_PERSONAL = 'UPDATE_INFO_PERSONAL';
export const UPDATE_AHORROS = 'UPDATE_AHORROS';
export const UPDATE_INGRESOS = 'UPDATE_INGRESOS';
export const REGISTER_USER = 'REGISTER_USER';
export const CONFIRMAR_CUENTA = 'CONFIRMAR_CUENTA';
export const SET_USER_ID = 'SET_USER_ID';
export const UPDATE_GASTOS_HOGAR = 'UPDATE_GASTOS_HOGAR';
export const UPDATE_GASTOS_TRANSPORTE = 'UPDATE_GASTOS_TRANSPORTE';

export function registerUser(payload) {
  return async function (dispatch) {
    try {
      let response = await axios.post('http://localhost:3001/register', payload);
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;
      console.log('IDACTIONS:', userId);

      // Guardar userId en el almacenamiento local
      localStorage.setItem('userId', userId);

      dispatch({
        type: REGISTER_USER,
        payload: {
          user: response.data,
          userId: userId,
        }
      });
    } catch (error) {
      // Manejo de errores
    }
  }
}

export function setUserId(userId) {
  return {
    type: SET_USER_ID,
    payload: userId,
  };
}

export function getUsers() {
  return async function (dispatch) {
    let json = await axios.get('http://localhost:3001/users');
    dispatch({
      type: GET_USERS,
      payload: json.data,
    });
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/user/${id}`);
    dispatch({
      type: GET_BY_ID,
      payload: json.data,
    });
  };
}

export function updateInfoPersonal (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/infoPersonal/${id}`, payload);
    return dispatch({
      type: UPDATE_INFO_PERSONAL,
      payload: json.data
    })
  }
}

export function updateAhorros (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/ahorros/${id}`, payload);
    return dispatch({
      type: UPDATE_AHORROS,
      payload: json.data
    })
  }
}

export function updateIngresos (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/ingresos/${id}`, payload);
    return dispatch({
      type: UPDATE_INGRESOS,
      payload: json.data
    })
  }
}

export function updateGastosHogar (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/gastosHogar/${id}`, payload);
    return dispatch({
      type: UPDATE_GASTOS_HOGAR,
      payload: json.data
    })
  }
}

export function updateGastosTransporte (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/gastosTransporte/${id}`, payload);
    return dispatch({
      type: UPDATE_GASTOS_TRANSPORTE,
      payload: json.data
    })
  }
}


export function confirmarCuenta(id) {
  return async function (dispatch) {
    try {
      const json = await axios.put(`http://localhost:3001/confirmar/${id}`);
      return dispatch({
        type: CONFIRMAR_CUENTA,
        payload: json.data
      });
    } catch (error) {
      console.error(error);
      // Aquí puedes manejar el error de alguna manera si lo deseas
    }
  };
}

export function login(email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;

      // Guardar userId en el almacenamiento local
      localStorage.setItem('userId', userId);

      dispatch({
        type: SET_USER_ID,
        payload: { userId, userExists: true }, // Agregar userExists como campo adicional
      });

      return { success: true, token, userExists: true }; // Devolver userExists en la respuesta
    } catch (error) {
      console.error(error);
      // Aquí puedes manejar el error de alguna manera si lo deseas
      return { success: false, error: error.message, userExists: false }; // Devolver userExists en la respuesta
    }
  };
}
