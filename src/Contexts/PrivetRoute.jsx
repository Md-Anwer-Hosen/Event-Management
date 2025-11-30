import React, { useContext } from "react";
import { AuthContext } from "./Authcontext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    </div>
  );
};

export default PrivetRoute;
