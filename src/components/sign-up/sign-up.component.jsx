import React from "react";

import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument, signInWithGoogle} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});


        } catch (error) {
            alert(error);
        }

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label='Display Name'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='Email'
                        name="email"
                        type="email"
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='Password'
                        name="password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='Confirm Password'
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">Sign up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;