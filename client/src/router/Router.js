import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/App/App";
import Favourites from "../components/Favourites/Favourites";
import Header from "../components/Header/Header";
import UpdateForm from "../components/UpdateForm/UpdateForm";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/favourites/:id' component={UpdateForm} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
