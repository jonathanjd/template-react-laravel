// actions types
import {
    SHOW_MESSAGE_FOR_EXAMPLE,
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from '../actions/HomePage';




const initialState = {
  message: 'Hi From Redux',
  users: [],
  loadingUsers: false,
  fetchUsersError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE_FOR_EXAMPLE:
      return {
        ...state,
        message: action.payload.message,
      };
    case FETCH_USERS_BEGIN:
        return {
            ...state,
            loadingUsers: true,
            fetchUsersError: null
        };
    case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loadingUsers: false,
          users: action.payload.users
        };
    case FETCH_USERS_FAILURE:
        return {
          ...state,
          loadingUsers: false,
          fetchUsersError: action.payload.error,
          users: []
        };

    default:
      return state;
  }
};
