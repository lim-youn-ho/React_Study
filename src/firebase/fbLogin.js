import { auth } from './fbInstance';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const [userData, setUserData] = useState(null);

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
            .then((data) => {
                setUserData(data.user); // user data 설정
                console.log(data) // console로 들어온 데이터 표시
                saveUserData();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function saveUserData(){
        console.log(userData)
        axios(
            {
                url: '/saveUser',
                method: 'post',
                data: {
                    userData:userData
                }
            }
        ).then(function (response) {
            console.log(response.data);
        });
    }

    return (
        <div>

            <button onClick={handleGoogleLogin}>Login</button>
            {userData ? userData.displayName : null}
        </div>
    );
}

export default App;