import { Link } from "react-router-dom";
import "./NavBar.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

// import { UserContext } from "../../context/user.context";
import { signOutStart } from "../../store/actions/user-actions";
import { useContext, useState } from "react";
import ShoppingBag from "../shopping-bag/shopping-bag";
import DropdownBag from "../bag-dropdown/bag-dropdown";
import {ToggleContext} from "../../context/toggle.context";
import {useSelector, useDispatch} from "react-redux";
import {DarkModeContext, themes} from "../../context/dark-mode.context"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"


function NavBar() {

  const [darkMode , setDarkMode] = useState(true)

  const {theme, changeTheme} = useContext(DarkModeContext)

  const dispatch = useDispatch()

  const currentUser = useSelector((state)=>state.user.currentUser)
  console.log(currentUser?.displayName)
  // const { currentUser } = useContext(UserContext);
  const {openToggle, setOpenToggle} = useContext(ToggleContext);


  const handleClick = ()=>{
    setOpenToggle(true)
    console.log(openToggle)
  }

  const handleSignOut = ()=>dispatch(signOutStart());

  

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">

          <div
          onClick={()=>{
            darkMode ? setDarkMode(false) : setDarkMode(true)
            changeTheme(darkMode ? themes.dark : themes.light)
          }}          
          className="nav-link">
            {!darkMode?
              <img className="darkIcon" src={`${sun}`} alt="sun" />
                :
                <img src={`${moon}`} alt="moon" />
            }
          
          </div>
        

        
       
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? 
            <span className="nav-link" onClick={handleSignOut}>
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
