import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import HomeLayouts from "../Layouts/HomeLayouts";

import Login from "../components/AuthPage/Login";
import CreateAccount from "../components/AuthPage/CreateAccount";
import Home from "../Pages/Home";
import Events from "../components/HomePage/Events";
import SingleEvent from "../components/SingleEvent";
import ContactSection from "../components/ContactSection";
import PageNotFound from "../components/PageNotFound";
import PrivetRoute from "../Contexts/PrivetRoute";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,

    children: [
      {
        index: true,
        element: <Navigate to={"/home"} />,
      },
      {
        path: "home",
        element: <Home />,
        loader: () => fetch("/event.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "events",
        element: <Events />,
        loader: () => fetch("/event.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "event/:id",
        element: (
          <PrivetRoute>
            <SingleEvent />
          </PrivetRoute>
        ),
        loader: () => fetch("/event.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "createaccount",
        element: <CreateAccount />,
      },
      {
        path: "contact",
        element: <ContactSection />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
