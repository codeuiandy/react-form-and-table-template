import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Form from './broComponent/form';
import Table from './broComponent/table';
function App() {
  return (
    <div className="App">
   <Router>
       
        <Switch>
        
          <Route exact path="/" component={Form} />
        
        
        

          
        
          
        </Switch>
        <Route exact path="/Table" component={Table} />
      </Router>
    </div>
  );
}

export default App;
