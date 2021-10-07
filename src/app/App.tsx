import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "../_start/layout/core";
import { MasterLayout } from "../_start/layout/MasterLayout";
import { Logout } from "./modules/auth/Logout";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import { PublicRoutes } from "./routing/PublicRoutes";
import { AuthProvider, useAuthState } from '../app/providers/AuthManage/context';

type Props = {
  basename: string;
};

const App: React.FC<Props> = ({ basename }) => {
  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <AuthProvider>
          <RoutesChildren />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const RoutesChildren = () => {
  const user = useAuthState();
  console.log('user', user)
  return(
    <Switch>
    <Route path="/logout" component={Logout} />
    {!user?.token ? (
      <Route>
        <PublicRoutes />
      </Route>
    ) : (
      <>
        <MasterLayout>
          <PrivateRoutes />
        </MasterLayout>
      </>
    )}
  </Switch>
  )
}

export { App };
