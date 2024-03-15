
import "@Components/Header"
import logo from "@Styles/shareHouseLogo.jpg";
import {Link,useNavigate} from "react-router-dom";
function Header(){
    const navigate  = useNavigate();
    function handleLogoClick() {
        navigate("/");
    }

    return(
    <Link to="/" className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" position='left' style={{ marginRight: '1.5em', height:'5rem' }} />
    </Link>
    );

}
export default Header