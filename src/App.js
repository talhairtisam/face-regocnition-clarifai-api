
import { Switch,BrowserRouter as Router, Route } from 'react-router';
import './App.css';
import AppPage from './components/AppPage';
import SignIn from './components/SignIn/SignIn';

function App() {

  return (
    <div>
        <Switch>
          <Route path="/app" component={AppPage} />
          <Route Path="/" exact component={SignIn} />
        </Switch>
    </div>
  );
}

export default App;
