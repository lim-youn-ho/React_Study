
import "@Styles/Header.css"
import logo from "@Styles/shareHouseLogo.jpg";
import {Link,useNavigate} from "react-router-dom";
import {AppBar,Container,Button,Toolbar ,Box } from '@mui/material';

function Header(){
    const navigate  = useNavigate();
    function handleLogoClick() {
        navigate("/");
    }

    return(
        <AppBar className="AppBar"  position="static"
                sx={{
                    backgroundColor: 'black',
                }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" className="logo" onClick={handleLogoClick}>
                        <img src={logo} alt="Logo" position='left' style={{ marginRight: '1.5em'}} />
                    </Link>
                    <Box horizontal={ 'right'}>
                        <Button variant="outlined"  size="small">로그인</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );

}
export default Header