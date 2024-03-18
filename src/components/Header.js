
import "@Styles/Header.css"
import logo from "@Styles/shareHouseLogo.jpg";
import {Link,useNavigate} from "react-router-dom";
import {
    AppBar,
    Container,
    Button,
    Toolbar,
    Box,
    Tooltip,
    ListItemButton,
    ListItemIcon,
    ListItemText, Collapse, List
} from '@mui/material';
import {ExpandLess ,ExpandMore ,StarBorder  }from '@mui/icons-material';
import {useState} from "react";


function Header(){
    const navigate  = useNavigate();

    function handleLogoClick() {
        navigate("/");
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return(
        <AppBar className="AppBar"  position="static"
                sx={{
                    backgroundColor: 'black',
                }}>
            <Container maxWidth="xl">

                    <Link to="/" className="logo" onClick={handleLogoClick}>
                        <img src={logo} alt="Logo" position='left' style={{ marginRight: '1.5em'}} />
                    </Link>
                    <div  style={{float: 'right'}}>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="menu" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="로그인" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>

            </Container>
        </AppBar>

    );

}
export default Header