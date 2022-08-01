import React, { useEffect, lazy, Suspense, useContext} from 'react';
import {Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Spinner from './components/spinner/spinner';
import { gql, useMutation, useQuery } from "@apollo/client";
import {ToggleContext} from "./context/toggle.context"
import { WhishListContext } from './context/wish-list.context';

import {GlobalStyle} from './global.styles'

import {useDispatch, useSelector} from "react-redux"
import {checkUserSession} from "./store/actions/user-actions/index";

import ReactGA from "react-ga4";

const SignIn = lazy(()=>import("./components/SingInPage/SignIn"))
const Home = lazy(()=>import("./pages/Home"))
const Shop = lazy(()=>import("./pages/Shop/shop.component"))
const BagItems = lazy(()=>import("./components/bag-items/bag-items"))
const CheckoutPage = lazy(()=>import("./pages/Checkout/checkout-page"))
const CategoryPage = lazy(()=>import("./pages/category-page/category-page"))
const WishList = lazy(()=>import("./components/wish-list/wish-list"))

ReactGA.initialize("G-LL8BBFC8TM")

const ADD_USER_ITEMS = gql`
  mutation AddUserItems($name: String, $itemsId: [Int]){
    addUserItems(name:$name, itemsId: $itemsId){
      id
      name
    }
  }
`

const GET_USERS = gql`
    query{
        users{
          id
          name
          items{
            id
            name
            imageUrl
            price
          }
        }
    }
`



function App() {
  const currentUser = useSelector((state)=>state.user.currentUser)
  const currentName = currentUser?.displayName
  const {currentItems} = useContext(ToggleContext)
  const {wishList,setWishList} = useContext(WhishListContext)
  const [addUserItems] = useMutation(ADD_USER_ITEMS)
  const {loading, error, data} = useQuery(GET_USERS)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(data && currentUser){
      console.log(data.users)
      let us = data.users.find(u=>u.name === currentUser?.displayName)
      console.log(us)
      let its = us.items
      console.log(its)
      setWishList(its)
    
    }
    currentItems.length && currentUser?.displayName && addUserItems({variables:{name: currentUser.displayName, itemsId: currentItems.map(i=>i.id)}})
    dispatch(checkUserSession())
    console.log(data)
    ReactGA.pageview(window.location.pathname + window.location.search)

}, [currentItems, data])


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
      <Route path="/wish-list" component={WishList}/>
      </Suspense>

    </div>
  );
}

export default App;
