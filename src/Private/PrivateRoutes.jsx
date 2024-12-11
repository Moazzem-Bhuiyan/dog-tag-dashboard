import React, { useContext } from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const auth = {token: "children"}
  if (!auth?.token) {
    return <Navigate to="/auth/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
