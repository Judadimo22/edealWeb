import axios from "axios";
export const GET_USERS = 'GET_USERS';
export const GET_BY_ID = 'GET_BY_ID';
export const UPDATE_INFO_PERSONAL = 'UPDATE_INFO_PERSONAL';
export const UPDATE_AHORROS = 'UPDATE_AHORROS';
export const UPDATE_INGRESOS = 'UPDATE_INGRESOS'

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
  

  export function updateAhorrosPaso2 (id, payload){
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
  
