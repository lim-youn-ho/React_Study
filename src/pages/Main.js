import React, { useEffect, useState } from "react";
import { authService } from "@Firebase/fbInstance";
import { Container } from "@mui/material";


function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserData(user);
            } else {
                setIsLoggedIn(false);
                setUserData(null); // 로그아웃 시 userData를 초기화
            }
        });

        // useEffect의 cleanup 함수에서 이벤트 리스너 구독 해제
        return () => unsubscribe();
    }, []);


    return (
        <div>
            <Container>
                {isLoggedIn && userData ? userData.email : null}
            </Container>
        </div>
    );
}

export default Main;