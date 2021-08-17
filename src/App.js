
import { Switch,BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppPage from './components/AppPage';
import SignIn from './components/SignIn/SignIn';

function App() {

  return (
    <div>
    <Router>
        <Switch>
          <Route path="/app" component={AppPage} />
          <Route Path="/" exact component={SignIn} />
        </Switch>
        </Router>
    </div>

  );
}

export default App;
