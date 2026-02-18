import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
// Removed 'logo' and 'UpdateEmployeeComponent' if not used in Switch below

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* If you use CreateEmployeeComponent for both Add and Update, 
                              you don't need the separate Update import */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;