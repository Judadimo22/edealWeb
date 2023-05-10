import { GET_USERS } from "../actions/index";

const initialState = {
    allUsers: [],
    Users: [],
    UsersCopy: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                Users: action.payload,
                UsersCopy: action.payload
            };
        default: {
            return state;
        }
    }
}

export default rootReducer;