import React, { Component } from 'react';
import NavBar from '../NavBar';
import { reduxForm, Field } from 'redux-form';

class RegisterUser extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Register User</h1>
                <hr />
                <form action="">
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
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'RegisterUser' })(RegisterUser);
