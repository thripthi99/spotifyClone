import React , {useContext} from 'react'
import Navbar from './Pages/HeaderComponent/Navbar';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Home from './Pages/Home';
import Login from './Components/AuthComponent/Login';
import Signup from './Components/AuthComponent/Signup';
import PageNotFound from './Pages/PageNotFound';
import { AuthContextApi } from './Api\'s/AuthContent';
import { Fragment } from 'react/cjs/react.production.min';
import UserHome from './UserComponents/UserHome';

const App = () => {
  let data = useContext(AuthContextApi);
  
  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          <header>
            {!data ? <Navbar /> : ""}
            
          </header>
          <ToastContainer />
          <main>
            {/* dynamic route starts here */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <Signup />
              </Route>
              {/* user routing start */}
              <Route path="/Userhome" exact>
                <UserHome/>
                </Route>
              {/* user routing start */}
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            {/* dynamic route Ends here */}
          </main>
        </Router>
      </article>
    </section>
  );
  }
  
    


export default App
