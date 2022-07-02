import React, { useEffect} from 'react';
import {Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import "./index.styles.scss"
import SignIn from "./components/SingInPage/SignIn"
import Home from "./pages/Home";
import Shop from "./pages/Shop/shop.component";
import BagItems from "./components/bag-items/bag-items";
import CheckoutPage from "./pages/Checkout/checkout-page";
import CategoryPage from "./pages/category-page/category-page";
import {useDispatch, useSelector} from "react-redux"
import {setCurrentUser} from "./store/actions/user-actions/index";
import {stateChangedListener, createUserDocumentFromAuth} from "./utils/firebase/firebase.utils"

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsuscribe = stateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user))
    })

    return unsuscribe

}, [])


  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/signIn" component={SignIn} />
      <Route exact path="/shop" component={Shop}/> 
      <Route path="/shop/:title" component={CategoryPage}/>
      <Route path="/Bag" component={BagItems}/> 
      <Route path="/checkout" component={CheckoutPage}/>

    </div>
  );
}

export default App;
