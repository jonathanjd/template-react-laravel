// dependencies
import {
    combineReducers
} from 'redux';
import {
    reducer as reduxForm
} from 'redux-form';
// import reducers...
import home from './HomePageReducer';
import registerUser from './RegisterUserPage';

const rootReducer = combineReducers({
    home,
    form: reduxForm,
    registerUser,
});

export default rootReducer;
