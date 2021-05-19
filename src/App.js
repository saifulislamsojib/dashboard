import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
