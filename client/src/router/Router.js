import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/App/App";
import Favourites from "../components/Favourites/Favourites";
import Header from "../components/Header/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favourites' component={Favourites} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
