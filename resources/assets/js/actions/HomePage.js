// actions types
export const SHOW_MESSAGE_FOR_EXAMPLE = 'SHOW_MESSAGE_FOR_EXAMPLE';
export const FETCH_USERS_BEGIN   = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// simple action
export function showMessage(message) {
  return {
    type: SHOW_MESSAGE_FOR_EXAMPLE,
    payload: { message },
  };
}

// async action
export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

export const fetchUsersError = error => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
});

export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersBegin());
        return axios.get('http://react-laravel.test/api/users')
            .then(response => {
                if (response.status === 200) {
                    dispatch(fetchUsersSuccess(response.data));
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchUsersError(error))
        });
    };
  }