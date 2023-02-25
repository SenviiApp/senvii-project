import { createBrowserRouter, redirect, json } from "react-router-dom";
import { $axios } from "../lib";
import {
  App,
  Home,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  MailConfirmed,
} from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          let response;
          try {
            response = await $axios.get("/auth/login");
            return json(response.data);
          } catch (error) {
            return redirect("/login");
          }
        },
      },
      {
        path: "/login",
        element: <Login />,
        loader: async () => {
          let response;
          try {
            response = await $axios.get("/auth/login");
            return redirect("/");
          } catch (error) {
            return null;
          }
        },
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:id",
        element: <ResetPassword />,
      },
      {
        path: "/mail-confirmed",
        element: <MailConfirmed />,
      },
    ],
  },
]);

export default router;
