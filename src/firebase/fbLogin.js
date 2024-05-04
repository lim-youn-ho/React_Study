import  {authService}  from '@Firebase/fbInstance';
import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Card, Box, CardActions, Button, Container, Stack, TextField} from '@mui/material';

import axios from 'axios';


function App() {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                // 로그인 된 상태일 경우
                setIsLoggedIn(true);
            } else {
                // 로그아웃 된 상태일 경우
                setIsLoggedIn(false);
            }
        });
    }, []);

    const LogIn = async (evt) => {
        evt.preventDefault();
        try {
            let data;
             // log in
            data =  await signInWithEmailAndPassword(authService, email, password);
            setUserData(data.user);
            sessionStorage.setItem('userData', userData)
            navigate("/Main");

            } catch (error) {

            }
        };



    //구글 로그인
    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authService, provider)
            .then((data) => {
                setUserData(data.user); // user data 설정
               // saveUserData();
            })
            .catch((err) => {
                console.log(err);
            });
    }


/*    function saveUserData(){

        axios.post('/api/saveUser',
            {
                    name:userData.displayName,
                    email:userData.email
            }
        ).then(function (response) {
            console.log(response.data);
        });
    }*/

    //로그아웃
    const auth = getAuth();
    const handleGoogleLogout = () => {
        auth.signOut();

    }

    const userSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(authService, email, password);
            navigate("/Main");
        }catch (error){
            console.log(error);
        }

    }

    return (

        <Container maxWidth="sm">

            <br/>
            <Box sx={{ bgcolor: '#ffffff', height: '100vh' }} >
                <br/>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} maxLength={20} required id="outlined-required" label="이메일" defaultValue="이메일"/>
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} maxLength={20}  required id="outlined-required" label="패스워드" defaultValue="패스워드"/>
                </Stack>
                <br/>
                <Stack spacing={2} direction="row" justifyContent="center">

                    <Button  variant="contained" size="small" onClick={LogIn}>로그인</Button>
                    <Button variant="contained"  size="small" onClick={userSignUp}>이 아이디로 회원가입</Button>
                </Stack>

            </Box>
            <button onClick={handleGoogleLogin}>GoogleLogin</button>

            {userData ? userData.displayName : null}
        </Container>
    );
}

export default App;
