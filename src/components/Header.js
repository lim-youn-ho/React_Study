
import "@Styles/Header.css"
import logo from "@Styles/shareHouseLogo.jpg";
import {Link,useNavigate} from "react-router-dom";
import {
    AppBar,
    Container,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Avatar, Divider
} from '@mui/material';
import {ExpandLess, ExpandMore, Logout, PersonAdd} from '@mui/icons-material';
import {Fragment, useEffect, useState} from "react";
import {getAuth} from "firebase/auth";
import { authService } from "@Firebase/fbInstance";



function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate  = useNavigate();
    const auth = getAuth();
    function handleLogoClick() {
        navigate("/Main");
    }



    const handleGoogleLogout = () => {
        auth.signOut();
        navigate("/Main");
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const goToSign = () => {
        navigate("/LogIn");
        setAnchorEl(null);
    }


    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserData(user);
            } else {
                setIsLoggedIn(false);
                setUserData(null);
            }
        });

        // useEffect의 cleanup 함수에서 이벤트 리스너 구독 해제
        return () => unsubscribe();
    }, []);


    return(
        <AppBar className="AppBar"  position="static"
                sx={{
                    backgroundColor: 'black',
                }}>
            <Container maxWidth="xl">
                 <div  style={{float: 'left'}}>
                    <Link to="/" className="logo" onClick={handleLogoClick}>
                        <img src={logo} alt="Logo" position='left' style={{ marginRight: '1.5em'}} />
                    </Link>
                   </div>

                    <div  style={{float: 'right', margin : '12px'}}>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="menu" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                    </div>

                    <Fragment>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, '& .MuiAvatar-root': {width: 32, height: 32, ml: -0.5, mr: 1,}, '&::before': {content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,},},
                            }}

                        >

                            {!isLoggedIn &&  (
                                <MenuItem onClick={goToSign}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    LogIn
                                </MenuItem>
                            )}
                            {isLoggedIn &&  (
                            <div>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> 마이페이지
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleGoogleLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </div>
                            )}
                        </Menu>
                    </Fragment>

            </Container>
        </AppBar>

    );

}
export default Header