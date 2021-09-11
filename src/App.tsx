import { Switch, Route, Redirect } from "react-router-dom";
import { Auth, Plan, Main } from "./pages";

export enum AppRoutes {
  MAIN = "/main",
  AUTH = "/auth",
  PLAN = "/plan",
  EDIT_IPR = "/edit/:id"
}

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path={AppRoutes.MAIN} component={Main} />
      <Route exact path={AppRoutes.AUTH} component={Auth} />
      <Route exact path={AppRoutes.PLAN} component={Plan} />
      <Route exact path={AppRoutes.EDIT_IPR} component={Plan} />
      <Redirect to={AppRoutes.AUTH} />
    </Switch>
  );
};
