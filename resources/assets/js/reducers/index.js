// dependencies
import { combineReducers } from 'redux';

// import reducers...
import home from './HomePageReducer';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
