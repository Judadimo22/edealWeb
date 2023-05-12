import { 
    GET_USERS,
    GET_BY_ID
} from "../actions/index";

const initialState = {
    allUsers: [],
    Users: [],
    UsersCopy: [],
    Details: []
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
            return{
                ...state,
                Details: action.payload
            }
        default: {
            return state;
        }
    }
}

export default rootReducer;