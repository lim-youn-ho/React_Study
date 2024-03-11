import { authService } from '@Firebase/fbInstance';
import { GoogleAuthProvider, signInWithPopup,getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    console.log(isLoggedIn);

    //구글 로그인
    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authService, provider)
            .then((data) => {
                setUserData(data.user); // user data 설정
                saveUserData();
            })
            .catch((err) => {
                console.log(err);
            });
    }


    function saveUserData(){
        console.log(userData)
        console.log(userData.email)
        axios.post('/api/saveUser',
            {
                    name:userData.displayName,
                    email:userData.email
            }
        ).then(function (response) {
            console.log(response.data);
        });
    }

    const handleGoogleLogout = () => {
        authService.signOut();

    }



    return (
        <div>

            <button onClick={handleGoogleLogin}>Login</button>
            <button onClick={handleGoogleLogout}>Logout</button>
            {userData ? userData.displayName : null}
        </div>
    );
}

export default App;
