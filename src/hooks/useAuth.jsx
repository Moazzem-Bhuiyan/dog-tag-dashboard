import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const useAuth = (children) => {


  if (!token) {
    return <Navigate to="/auth/signin" />;
  }

  return children;
};
