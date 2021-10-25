import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '../_start/layout/core';
import { MasterLayout } from '../_start/layout/MasterLayout';
import { Logout } from './modules/auth/Logout';
import { PrivateRoutes } from './routing/PrivateRoutes';
import { PublicRoutes } from './routing/PublicRoutes';
import { AuthProvider, useAuthState } from './providers/AuthManagement/context';

type Props = {
  basename: string;
};

const RoutesChildren = () => {
  const userState = useAuthState();
  console.log('userState', userState);
  return (
    <Switch>
      <Route path="/logout" component={Logout} />
      {!userState?.auth.access ? (
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
  );
};

const App: React.FC<Props> = ({ basename }) => (
  <BrowserRouter basename={basename}>
    <ThemeProvider>
      <AuthProvider>
        <RoutesChildren />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export { App };
