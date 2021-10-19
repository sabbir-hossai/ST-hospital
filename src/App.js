import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Services from './components/Services/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Health from './components/Health/Health';
import ServiceDetail from './components/Services/servicedetaile/ServiceDetail';
import Footer from './components/Footer/Footer';
import Aboute from './components/Aboute/Aboute';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="#service">
              <Services></Services>
            </Route>
            <Route path="/healthblog">
              <Health></Health>
            </Route>
            <Route path="/aboute">
              <Aboute></Aboute>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/servicedetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
