import {Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import "./index.styles.scss"
import SignIn from "./components/SingInPage/SignIn"
import Home from "./pages/Home";
import Shop from "./pages/Shop/shop.component";
import BagItems from "./components/bag-items/bag-items";
import CheckoutPage from "./pages/Checkout/checkout-page";
import CategoryPage from "./pages/category-page/category-page";


function App() {
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
