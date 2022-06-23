import CardsContainer from "./components/CardContainer";
import {Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import "./index.styles.scss"
import SignIn from "./components/SingIn/SignIn";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/' component={CardsContainer} />
      <Route path='/signIn' component={SignIn} />
      
      
    </div>
  );
}

export default App;
