import { Link } from "react-router-dom";
import "./NavBar.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

// import { UserContext } from "../../context/user.context";
import { signOutCurrentUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import ShoppingBag from "../shopping-bag/shopping-bag";
import DropdownBag from "../bag-dropdown/bag-dropdown";
import {ToggleContext} from "../../context/toggle.context";
import {useSelector} from "react-redux";


function NavBar() {

  const currentUser = useSelector((state)=>state.user.currentUser)
  console.log(currentUser)
  // const { currentUser } = useContext(UserContext);
  const {openToggle, setOpenToggle} = useContext(ToggleContext);

  const handleClick = ()=>{
    setOpenToggle(true)
    console.log(openToggle)
  }


  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? 
            <span className="nav-link" onClick={signOutCurrentUser}>
              SIGN OUT
            </span>
           : 
            <Link className="nav-link" to="/signIn">
              Sign-In
            </Link>
          }
          <ShoppingBag onClick={handleClick} />
        </div>
        {openToggle  &&
        <DropdownBag />

        }
      </div>
    </>
  );
}

export default NavBar;
