import axios from "axios";
export const GET_USERS = 'GET_USERS';
export const GET_BY_ID = 'GET_BY_ID'

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
