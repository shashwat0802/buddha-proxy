import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './pages/Dashboard';
import Purchase from './pages/Purchase';
import Datacenter from './pages/Datacenter';
import Bulk from './pages/Bulk';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/purchase" component={Purchase} />
          <Route exact path="/purchase/datacenter" component={Datacenter} />
          <Route exact path="/purchase/bulk" component={Bulk} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
