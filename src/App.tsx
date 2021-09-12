import { Switch, Route, Redirect } from "react-router-dom";
import { Auth, AdminPage, Plan, Main } from "./pages";

export enum AppRoutes {
  MAIN = "/main",
  AUTH = "/auth",
  ADMIN = "/admin",
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
      <Route exact path={AppRoutes.ADMIN} component={AdminPage} />
      <Redirect to={AppRoutes.AUTH} />
    </Switch>
  );
};
