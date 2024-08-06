import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_START:
            return {
                ...state,
                error: null,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        // case SIGN_IN_START:
        //     return {
        //         ...state,
        //         error: null,
        //     };
        // case SIGN_IN_SUCCESS:
        //     return {
        //         ...state,
        //         User: action.payload,
        //         error: null,
        //     };
        // case SIGN_IN_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload,
        //     };
        default:
            return state;
    }
};
export default userReducer;

