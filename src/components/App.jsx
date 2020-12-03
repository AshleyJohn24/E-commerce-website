import React, {Component} from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Header from "./Header";
import Mainpage from "./Mainpage";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Kid from "../pages/Kid";
import About from "../pages/About";
import Login from "./Login";
import Register from "./Register";
class App extends Component {
  render(){
    return (
    
 
    <Router>
    <div className="grid-container">
    <Header/>
    <main>
              <Route exact path="/" component={Mainpage} > 
              </Route>
              <Route exact path="/Women" component={Women}> 
              </Route>
              <Route exact path="/Men" component={Men}> 
              </Route>
              <Route exact path="/Kid" component={Kid}> 
              </Route>
              <Route exact path="/About" component={About}> 
              </Route>
              <Route exact path="/Login" component={Login}> 
              </Route>
              <Route exact path="/Register" component={Register}> 
              </Route>
    </main>
    <footer>All right is reserved.</footer>
              </div>
      </Router>
       
  );
}
}

export default App;
