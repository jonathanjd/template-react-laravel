export const STORE_USER_BEGIN = 'STORE_USER_BEGIN';
export const STORE_USER_SUCCESS = 'STORE_USER_SUCCESS';
export const STORE_USER_FAILURE = 'STORE_USER_FAILURE';

export const storeUserBegin = () => {
    return {
        type: 'STORE_USER_BEGIN'
    }
}

export const storeUserFailure = error => {
    return {
        type: 'STORE_USER_FAILURE',
        payload: {
            error
        }
    }
}

export const storeUserSucces = response => {
    return {
        type: 'STORE_USER_SUCCESS',
        payload: {
            response
        }
    }
}

export function storeUser(values) {
    return dispatch => {
        dispatch(storeUserBegin());
        return new Promise((resolve, reject) => {
            axios.post('http://react-laravel.test/api/auth/signup', values)
                .then(response => {
                    if (response.status === 201) {
                        console.log(response.data);
                        dispatch(storeUserSucces(response.data));
                        resolve();
                    }
                })
                .catch(error => {
                    console.log(error);
                    dispatch(storeUserFailure(error));
                    reject();
                });
        });

    };
};
