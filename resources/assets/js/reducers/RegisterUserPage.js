// actions types

import {
    STORE_USER_BEGIN,
    STORE_USER_SUCCESS,
    STORE_USER_FAILURE,

} from '../actions/RegisterUserPage';

const initialState = {
    loadingStore: false,
    messageStoreError: '',
    response: '',
}


export default (state = initialState, action) => {

    switch (action.type) {
        case STORE_USER_BEGIN:
            return {
                ...state,
                loadingStore: true,
                messageStoreError: '',
            }

        case STORE_USER_FAILURE:
            return {
                ...state,
                messageStoreError: action.payload.error,
                loadingStore: false,
            }

        case STORE_USER_SUCCESS:
            return {
                ...state,
                loadingStore: false,
                response: action.payload.response,

            }

        default:
            return state;
    }

};
