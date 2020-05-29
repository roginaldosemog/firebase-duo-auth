import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser && currentUser?.m === "primary" ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

const PrivateRoute2 = ({ component: RouteComponent, ...rest }) => {
  const { currentUser2 } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser2 && currentUser2?.m === "secondary" ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login2"} />
        )
      }
    />
  );
};

export { PrivateRoute, PrivateRoute2 };
