// dependencies
import {
    combineReducers
} from 'redux';
import {
    reducer as reduxForm
} from 'redux-form';
// import reducers...
import home from './HomePageReducer';

const rootReducer = combineReducers({
    home,
    form: reduxForm
});

export default rootReducer;
