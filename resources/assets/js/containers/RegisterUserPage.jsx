// depedencias
import { connect } from 'react-redux';

// actions
import * as actions from '../actions/RegisterUserPage';

// component
import RegisterUser from '../components/RegisterUser/';

export default connect(
    state => ({
        message: state.registerUser.loadingStore,
        users: state.registerUser.messageStoreError,
        loadingUsers: state.registerUser.response
    }),
    actions
)(RegisterUser);
