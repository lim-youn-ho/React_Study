import  {authService}  from '@Firebase/fbInstance';
import {useEffect, useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";


function signUp() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();


    const userSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(authService, email, password);
            navigate("/");
        }catch (error){
            console.log(error);
        }

    }
    return (
        <div>
            <label htmlFor="id">이메일</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={20} />
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={20} />
            <button onClick={userSignUp} >회원가입</button>
        </div>
    );
}
export default signUp