
import './App.css';
import Home from "./views/home";
import TheHeader from "./containers/TheHeader";
import TheFooter from "./containers/TheFooter";
import TheLayout from "./containers/TheLayout";
// import Login from "./views/login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./containers/style.css"
import Login from "./views/login/login";

function App() {
  return (
      <Router>
          <div>
                  <Switch>
                      <Route
                          path="/"
                          // redirect="home"

                          render={(props) =>
                          {
                              // let token = false;
                              // if(localStorage.getItem("token")){
                              if(true){
                                  return(<TheLayout {...props} />)
                              }
                              else {
                                  return(<Login {...props}  />)
                                  // return(<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
                              }

                          }}
                      />
                      {/*<Route exact path="/login" component={Login} />*/}
                  </Switch>

          </div>
      </Router>
  );
}

export default App;
