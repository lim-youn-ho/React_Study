import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authService } from '../firebase/fbInstance';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');

    const toggleAccount = () => setNewAccount((prev) => !prev)
    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data ;
        try {
            if(newAccount) data = await createUserWithEmailAndPassword(authService, email, password);
            else data = await signInWithEmailAndPassword(authService, email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={onChange} />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange} />
                <input
                    type="submit"
                    value={newAccount? "회원가입" : "로그인"} />
            </form>
            <span onClick={toggleAccount}>{newAccount? "회원가입" : "로그인"}</span>
            <div>
                <button name="Google">Google 로그인</button>
                <button name="Github">GitHub 로그인</button>
            </div>
        </div>
    )
}

export default Auth