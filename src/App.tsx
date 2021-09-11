import { Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Plan } from "./pages/Plan";
import { Main } from "./pages/Main";

export enum AppRoutes {
  MAIN = "/main",
  AUTH = "/auth",
  PLAN = "/plan",
}

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path={AppRoutes.MAIN} component={Main} />
      <Route exact path={AppRoutes.AUTH} component={Auth} />
      <Route exact path={AppRoutes.PLAN} component={Plan} />
      <Redirect to={AppRoutes.AUTH} />
    </Switch>
  );
};
