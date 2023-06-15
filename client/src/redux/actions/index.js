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
export const UPDATE_GASTOS_ENTRETENIMIENTO = 'UPDATE_GASTOS_ENTRETENIMIENTO';
export const UPDATE_GASTOS_FINANCIEROS = 'UPDATE_GASTOS_FINANCIEROS';
export const UPDATE_GASTOS_VACACIONES = 'UPDATE_GASTOS_VACACIONES';
export const UPDATE_GASTOS_IMPUESTOS = 'UPDATE_GASTOS_IMPUESTOS';
export const UPDATE_GASTOS_CREDITO = 'UPDATE_GASTOS_CREDITO';
export const UPDATE_METAS_FINANCIERAS = 'UPDATE_METAS_FINANCIERAS';
export const UPDATE_OBJETIVOS_SALUD = 'UPDATE_OBJETIVOS_SALUD';
export const UPDATE_OBJETIVOS_EDUCACION = 'UPDATE_OBJETIVOS_EDUCACION';
export const UPDATE_OBJETIVOS_RETIRO = 'UPDATE_OBJETIVOS_RETIRO';

export function registerUser(payload) {
  return async function (dispatch) {
    try {
      let response = await axios.post('http://localhost:3001/register', payload);
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;
      console.log('IDACTIONS:', userId);

      localStorage.setItem('userId', userId);

      dispatch({
        type: REGISTER_USER,
        payload: {
          user: response.data,
          userId: userId,
        }
      });
    } catch (error) {
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

export function updateGastosEntretenimiento (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/gastosEntretenimiento/${id}`, payload);
    return dispatch({
      type: UPDATE_GASTOS_ENTRETENIMIENTO,
      payload: json.data
    })
  }
}

export function updateGastosFinancieros (id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/gastosFinancieros/${id}`, payload);
    return dispatch({
      type: UPDATE_GASTOS_FINANCIEROS,
      payload: json.data
    })
  }
}

export function updateGastosVacaciones(id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/gastosVacaciones/${id}`, payload);
    return dispatch({
      type: UPDATE_GASTOS_VACACIONES,
      payload: json.data
    })
  }
}

export function updateGastosImpuestos(id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/gastosImpuestos/${id}`, payload);
    return dispatch({
      type: UPDATE_GASTOS_IMPUESTOS,
      payload: json.data
    })
  }
}

export function updateGastosCredito(id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/gastosCredito/${id}`, payload);
    return dispatch({
      type: UPDATE_GASTOS_CREDITO,
      payload: json.data
    })
  }
}

export function updateMetasFinancieras(id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/metasFinancieras/${id}`, payload);
    return dispatch({
      type: UPDATE_METAS_FINANCIERAS,
      payload: json.data
    })
  }
}

export function updateObjetivosSalud(id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/objetivosSalud/${id}`, payload);
    return dispatch({
      type: UPDATE_OBJETIVOS_SALUD,
      payload: json.data
    })
  }
}

export function updateObjetivosEducacion(id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/objetivosEducacion/${id}`, payload);
    return dispatch({
      type: UPDATE_OBJETIVOS_EDUCACION,
      payload: json.data
    })
  }
}

export function updateObjetivosRetiro(id, payload){
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/objetivosRetiro/${id}`, payload);
    return dispatch({
      type: UPDATE_OBJETIVOS_RETIRO,
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

      localStorage.setItem('userId', userId);

      dispatch({
        type: SET_USER_ID,
        payload: { userId, userExists: true }, 
      });

      return { success: true, token, userExists: true }; 
    } catch (error) {
      console.error(error);
      return { success: false, error: error.message, userExists: false }; 
    }
  };
}
