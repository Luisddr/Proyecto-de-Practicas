import React, { useEffect, lazy, Suspense} from 'react';
import {Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Spinner from './components/spinner/spinner';

import {GlobalStyle} from './global.styles'

import {useDispatch} from "react-redux"
import {checkUserSession} from "./store/actions/user-actions/index";

const SignIn = lazy(()=>import("./components/SingInPage/SignIn"))
const Home = lazy(()=>import("./pages/Home"))
const Shop = lazy(()=>import("./pages/Shop/shop.component"))
const BagItems = lazy(()=>import("./components/bag-items/bag-items"))
const CheckoutPage = lazy(()=>import("./pages/Checkout/checkout-page"))
const CategoryPage = lazy(()=>import("./pages/category-page/category-page"))


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkUserSession())

}, [])


  return (
    <div>
      <GlobalStyle/>
      <Suspense fallback={<Spinner/>}>

      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/signIn" component={SignIn} />
      <Route exact path="/shop" component={Shop}/> 
      <Route path="/shop/:title" component={CategoryPage}/>
      <Route path="/Bag" component={BagItems}/> 
      <Route path="/checkout" component={CheckoutPage}/>
      </Suspense>

    </div>
  );
}

export default App;
