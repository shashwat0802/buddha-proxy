import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './pages/Dashboard';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
