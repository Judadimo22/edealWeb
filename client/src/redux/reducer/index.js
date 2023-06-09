import {
    GET_USERS,
    GET_BY_ID,
    UPDATE_INFO_PERSONAL,
    REGISTER_USER,
    SET_USER_ID,
    UPDATE_INGRESOS
  } from "../actions/index";
  
  const initialState = {
    allUsers: [],
    Users: [],
    UsersCopy: [],
    Details: [],
    userId: ""
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          Users: action.payload,
          UsersCopy: action.payload
        };
      case GET_BY_ID:
        return {
          ...state,
          Details: action.payload
        };
      case UPDATE_INFO_PERSONAL:
        return {
          ...state
        };
      case UPDATE_INGRESOS: 
      return {
        ...state
      };
      case REGISTER_USER:
        console.log('ID:', action.payload.userId);
        return {
          ...state,
          userId: action.payload.userId
        };
      case SET_USER_ID:
        return {
          ...state,
          userId: action.payload
        };
      default: {
        return state;
      }
    }
  }
  
  export default rootReducer;
  