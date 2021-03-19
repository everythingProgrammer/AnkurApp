import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './home.js';
import View from './view.js';
function App() {
  return (

    <Router>
        <div className="App">
          <h1>This is a single page application</h1>
            <li> <NavLink className="navbar-item" to="/home"  exact>Home</NavLink></li>
            <li><NavLink className="navbar-item" to="/view"  exact>View ToDos</NavLink></li>
            <li><NavLink className="navbar-item" to="/register"  exact>Register ToDos</NavLink></li>
        </div>
    <div classname = "container">
      <Route exact path= "/home" component={Home}/>
      <Route exact path= "/view" component={View}/>
      {/* <Route exact path= "/register" component={}/> */}
      
    </div>
    </Router>
  );
}

export default App;
