import React from "react";
import { Route, Redirect } from "react-router-dom";

// children - то что находится внутри "защищенного роута", обычно это компонент
// isLoginned - пропс содержащий currentUser
// ...props все остальные пропсы кроме указанных первых двух children и isLoginned
// эта конструкция помогает избежать жестко установленных пропсов роута

const ProtectedRoute = ({ children, isLoginned, ...props }) => {
  return (
    <Route {...props}>
      {isLoginned ? children : <Redirect to="/signin" />}
    </Route>
  );
};

export default ProtectedRoute;
