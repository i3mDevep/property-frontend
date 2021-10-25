import React, { useEffect } from "react";
import { Redirect, Switch } from "react-router-dom";
import { logout } from '../../providers/AuthManagement/actions';
import { useAuthDispatch } from '../../providers/AuthManagement/context';

export function Logout() {
  const dispatch = useAuthDispatch();
  useEffect(() => {
    logout(dispatch)
    document.location.reload();
  }, [dispatch]);

  return (
    <Switch>
      <Redirect to="/auth/login" />
    </Switch>
  );
}
