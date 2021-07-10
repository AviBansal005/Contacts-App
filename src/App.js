import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/add" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </div>
  );
}

export default App;
