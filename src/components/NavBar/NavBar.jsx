import { Link } from "react-router-dom";
import './NavBar.styles.scss'

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import {UserContext} from '../../context/user.context';
import {signOutCurrentUser} from '../../utils/firebase/firebase.utils'; 
import { useContext } from "react";


function NavBar() {

    const {currentUser} = useContext(UserContext);

    return (  
        <>
        <div className="navigation">
            <Link to='/' className="logo-container">
                <CrwnLogo className="logo"/>
            </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/' >Shop</Link>
            {currentUser?
                <span className="nav-link" onClick={signOutCurrentUser}>SIGN OUT</span>
                :
                <Link className="nav-link" to='/signIn' >Sign-In</Link>
            }
        </div>
        </div>
        </>
    );
}

export default NavBar;