import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from "./Header";
function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/checkout">
         <h1>Checkout</h1>
         </Route>
         <Route path="/login">
         <h1>Login page</h1>
         </Route>
         {/* This is the default pag*/}
         <Route path="/">
           <Header/>
           
         <h1>HOME PAGE!! Welcome RANJAY wink</h1>
         </Route>
       </Switch>     
    </div>
    </Router>
  );
}
    {/*We nee React-Router*/}
    
    {/*localhost.com*/}
    {/* localhost.com/checkout*/}
    {/*loaclhost.com/login*/}
export default App;
