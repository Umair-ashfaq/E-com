import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButtom from '../../components/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleChange =event =>{
      const {value, name} = event.target;
       this.setState({[name]: value})
    }

    render (){
        return (
            <div className="sign-in">
                <h2>I Already have an account</h2>
                <span>Sign in with email and password</span>

                <form>
                    <FormInput type="email" name="email" label="email" handleChange={this.handleChange} value={this.state.email} required/>
                    
                    <FormInput type="password" name="password" label="password" handleChange={this.handleChange} value={this.state.password} required/>
                   
                    <div className="buttons">
                    <CustomButtom type="submit" > Sign in</CustomButtom>
                    <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>Sign in with GOOGLE</CustomButtom>
                    </div>
                    
                </form>
            </div>
        );
    }

}

export default SignIn;