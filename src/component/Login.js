import React from 'react';
import '../css/login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();

    const signIn = () => {
        auth.signInWithPopup(provider).then(
            history.push('/ace-dev/chat')
        ).catch(error => console.log(error.message))
    }

    return (
        <div className="login">
            <h2 > 🤷‍♀️🤷‍♀️</h2>
            <div className='login__logo'>
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
                    alt="discord__logo" />
            </div>

            <Button onClick={signIn} > Sign In</Button>
        </div>
    );
}

export default Login;
