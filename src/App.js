import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import PatientDetails from './components/PatientDetails';
import PatientList from './components/PatientList';
import PatientRegister from './components/PatientRegister';
import Protected from './components/Protected';
import PatientDataUpdate from './components/PatientDataUpdate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/home"><Home /></Route>
        <Route path="/SignUp"render={props=>(<Form {...props}/>)}></Route>
        <Route path="/register"><PatientRegister /></Route>
        {/*<Route path="/PatientDetails"><PatientDetails /></Route>*/}
        <Route path="/PatientList"><PatientList /></Route>
        <Route path="/Logout"><Logout /></Route>
        <Route path="/PatientDataUpdate/:id"
        render={props=>(<PatientDataUpdate {...props}/>
        )}>
          </Route>
        <Protected path="/PatientDetails/:id" render={props=>(<PatientDetails {...props}/>
        )} component={PatientDetails} ></Protected>
      </div>
    </Router>

  );
}

export default App;
