import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetails from './components/BlogDetails';
import Home from './components/Home';
import Create from './components/Create';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/Create">
              <Create/>
            </Route>

            <Route path="/blog-details/:id">
              <BlogDetails/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
    
      
    
  );
}

export default App;
