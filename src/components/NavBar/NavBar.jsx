import { Link } from "react-router-dom";
import './NavBar.styles.scss'

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'


function NavBar() {
    return (  
        <>
        <div className="navigation">
            <Link to='/' className="logo-container">
                <CrwnLogo className="logo"/>
            </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/' >Shop</Link>
            <Link className="nav-link" to='/signIn' >Sign-In</Link>
        </div>
        </div>
        </>
    );
}

export default NavBar;