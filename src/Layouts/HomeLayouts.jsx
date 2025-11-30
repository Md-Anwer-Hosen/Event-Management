import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const HomeLayouts = () => {
  const { state } = useNavigation();
  return (
    <div className="max-w-11/12 mx-auto">
      <Navbar />
      {state == "loading" ? <Loading /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default HomeLayouts;
