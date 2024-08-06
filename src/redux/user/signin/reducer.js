import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './types';

const INITIAL_STATE = {
    User: null,
    error: null
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_START:
            return {
                ...state,
                error: null,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                User: action.payload,
                error: null,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default UserReducer;

