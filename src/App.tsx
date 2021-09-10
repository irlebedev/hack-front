import { Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Main } from "./pages/Main";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/main" component={Main} />
      <Route exact path="/auth" component={Auth} />
      <Redirect to="/auth" />
    </Switch>
  );
};
