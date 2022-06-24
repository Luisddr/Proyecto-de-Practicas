import {Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import "./index.styles.scss"
import SignIn from "./components/SingInPage/SignIn"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/signIn" component={SignIn} />

    </div>
  );
}

export default App;
