import React, { Component } from 'react';
import NavBar from '../NavBar';
import { reduxForm, Field } from 'redux-form';

class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.storeUser(values).then(() => {
            this.props.history.push('/login');
        });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div>
                <NavBar />
                <h1>Register User</h1>
                <hr />
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                        />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">
                            Password Confirmation
                        </label>
                        <Field
                            name="password_confirmation"
                            component="input"
                            type="password"
                        />
                    </div>
                    <button type="submit" disabled={pristine || submitting}>
                        Send
                    </button>
                    <button
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'RegisterUser' })(RegisterUser);
