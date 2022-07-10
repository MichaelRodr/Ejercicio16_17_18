
import { BrowserRouter as Router, Route, Switch ,  Redirect} from "react-router-dom";
import App from "../App";
import Header from "../components/header/Header";
import HomePage from '../pages/HomePage'
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/Register";
import Tasks from "../pages/Tasks";

const Routers = () => {
  const logged = false;
  
  return (
    <div>
      <Router >
        <Header />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/tasks'} >
            {logged ?
            (<Tasks />) :
            
            (<Redirect from='/' to='/login'/>)
            }
          </Route>
          
          
          <Route exact path={'*'} component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routers