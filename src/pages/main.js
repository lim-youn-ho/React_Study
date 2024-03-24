import {useEffect, useState} from "react";
import {authService} from "@Firebase/fbInstance";
import {Container} from "@mui/material";


function main() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                // 로그인 된 상태일 경우
                setIsLoggedIn(true);
                setUserData(user);
            } else {
                // 로그아웃 된 상태일 경우
                setIsLoggedIn(false);
            }
           console.log(user);

        });
    }, []);

    return(
        <Container>
            {userData ? userData.email : null}
        </Container>
    );
}

export default main;