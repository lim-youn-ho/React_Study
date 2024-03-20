import  {authService}  from '@Firebase/fbInstance';
import { GoogleAuthProvider, signInWithPopup,getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import {useEffect, useState,ReactNode} from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';


function App() {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            console.log(userData);
            } catch (error) {
            console.log(error);
            }
        };



    //로그인 로그아웃 상태 확인
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                // 로그인 된 상태일 경우
                setIsLoggedIn(true);
            } else {
                // 로그아웃 된 상태일 경우
                setIsLoggedIn(false);
            }
            console.log(isLoggedIn);
        });
    }, []);

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


    function saveUserData(){

        axios.post('/api/saveUser',
            {
                    name:userData.displayName,
                    email:userData.email
            }
        ).then(function (response) {
            console.log(response.data);
        });
    }

    //로그아웃
    const auth = getAuth();
    const handleGoogleLogout = () => {
        auth.signOut();

    }
    //회원가입
    const navigate = useNavigate();
    const goToSign = () => {
        navigate("/SignUp");
    }

    return (

        <div>
            <label htmlFor="id">이메일</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={20} />
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={20} />
            <button onClick={LogIn} >로그인</button>
            <button onClick={goToSign} >회원가입</button>



            <button onClick={handleGoogleLogin}>GoogleLogin</button>

            {userData ? userData.displayName : null}
        </div>
    );
}

export default App;
