import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './components/Main';
import {Register, Login} from './pages/Auth';
import Loader from './components/Loader';


function App() {
  return (
    <div className="App">
      <Loader />
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
