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
          const { data } = await $axios.get("/auth/login");
          if (!data.success) {
            return redirect("/login");
          }
          return json(data);
        },
      },
      {
        path: "/login",
        element: <Login />,
        loader: async () => {
          const { data } = await $axios.get("/auth/login");
          if (!data.success) {
            return null;
          }
          return redirect("/");
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
